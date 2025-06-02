    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const mysql = require('../mysql');
    const multer = require('multer');
    const path = require('path');

    const JWT_SECRET = 'apenas_um_segredo'; // Substitua por uma chave secreta segura

    // Configuração do Multer para upload de imagens
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'Uploads/profile/');
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    });

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const filetypes = /jpeg|jpg|png/;
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
            const mimetype = filetypes.test(file.mimetype);
            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb(new Error('Apenas imagens JPEG ou PNG são permitidas!'));
            }
        }
    }).single('profile_image');

    exports.obterUsuario = async (req, res) => {
        try {
            const idUsuario = Number(req.params.id);
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ mensagem: 'Token não fornecido' });
            }
            const decoded = jwt.verify(token, JWT_SECRET);
            if (decoded.id !== idUsuario && !decoded.admin) {
                return res.status(403).json({ mensagem: 'Não autorizado' });
            }

            const [usuario] = await mysql.execute(
                `SELECT id, first_name, last_name, email, phone, birth_date, profile_image, admin FROM users WHERE id = ?`,
                [idUsuario]
            );

            if (!usuario) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado' });
            }

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    };

    exports.atualizarUsuario = async (req, res) => {
        try {
            const idUsuario = Number(req.params.id);
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ mensagem: 'Token não fornecido' });
            }
            const decoded = jwt.verify(token, JWT_SECRET);
            if (decoded.id !== idUsuario && !decoded.admin) {
                return res.status(403).json({ mensagem: 'Não autorizado' });
            }

            let senhaHash = null;
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                senhaHash = await bcrypt.hash(req.body.password, salt);
            }

            const updates = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                profile_image: req.file ? req.file.filename : req.body.profile_image
            };

            const fields = [];
            const values = [];
            for (const [key, value] of Object.entries(updates)) {
                if (value !== undefined && value !== null) {
                    fields.push(`${key} = ?`);
                    values.push(value);
                }
            }
            if (senhaHash) {
                fields.push('password = ?');
                values.push(senhaHash);
            }
            values.push(idUsuario);

            const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
            const resultado = await mysql.execute(query, values);

            return res.status(200).json({
                mensagem: 'Usuário atualizado com sucesso',
                resultado: resultado
            });
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    };

    exports.uploadImagemPerfil = async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ mensagem: err.message });
            }
            try {
                const idUsuario = Number(req.params.id);
                const token = req.headers.authorization?.split(' ')[1];
                if (!token) {
                    return res.status(401).json({ mensagem: 'Token não fornecido' });
                }
                const decoded = jwt.verify(token, JWT_SECRET);
                if (decoded.id !== idUsuario && !decoded.admin) {
                    return res.status(403).json({ mensagem: 'Não autorizado' });
                }
    
                const fileName = req.file.filename; // Usa apenas o nome do arquivo
                await mysql.execute(
                    `UPDATE users SET profile_image = ? WHERE id = ?`,
                    [fileName, idUsuario]
                );
    
                return res.status(200).json({
                    mensagem: 'Imagem de perfil atualizada com sucesso',
                    profile_image: fileName
                });
            } catch (error) {
                return res.status(500).json({ mensagem: error.message });
            }
        });
    };

    exports.cadastrarUsuario = async (req, res) => {
        try {
            const { first_name, last_name, email, password, birth_date, phone, admin } = req.body;

            if (!first_name || !last_name || !email || !password || !birth_date) {
                return res.status(400).json({
                    mensagem: 'Campos obrigatórios: first_name, last_name, email, password, birth_date'
                });
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ mensagem: 'Formato de e-mail inválido' });
            }

            // Check for duplicate email
            const [existingUser] = await mysql.execute(
                `SELECT id FROM users WHERE email = ?`,
                [email]
            );
            if (existingUser) {
                return res.status(409).json({ mensagem: 'E-mail já cadastrado' });
            }

            // Validate birth_date format (YYYY-MM-DD)
            if (!/^\d{4}-\d{2}-\d{2}$/.test(birth_date)) {
                return res.status(400).json({ mensagem: 'Formato de data de nascimento inválido (use YYYY-MM-DD)' });
            }

            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(password, salt);

            const resultado = await mysql.execute(
                `INSERT INTO users (first_name, last_name, email, password, birth_date, phone, admin) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [first_name, last_name, email, senhaHash, birth_date, phone, admin || 0]
            );

            return res.status(201).json({
                mensagem: 'Usuário criado com sucesso',
                id: resultado.insertId
            });
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ mensagem: 'E-mail já cadastrado' });
            }
            return res.status(500).json({ mensagem: `Erro no servidor: ${error.message}` });
        }
    };

    exports.deletarUsuario = async (req, res) => {
        try {
            const idUsuario = Number(req.params.id);

            const resultado = await mysql.execute(
                `DELETE FROM users WHERE id = ?`,
                [idUsuario]
            );

            return res.status(200).json({
                mensagem: 'Usuário deletado com sucesso',
                resultado: resultado
            });
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    };



    exports.loginUsuario = async (req, res) => {
        try {
            const { email, password } = req.body;
    
            const [usuario] = await mysql.execute(
                `SELECT * FROM users WHERE email = ?`,
                [email]
            );
    
            if (!usuario) {
                return res.status(401).send({ mensagem: "Usuário não cadastrado" });
            }
    
            const match = await bcrypt.compare(password, usuario.password);
            if (!match) {
                return res.status(401).send({ mensagem: "Senha incorreta" });
            }
    
            const token = jwt.sign({ 
                id: usuario.id,
                first_name: usuario.first_name,
                last_name: usuario.last_name,
                email: usuario.email,
                birth_date: usuario.birth_date,
                admin: usuario.admin,
                profile_image: usuario.profile_image // Adiciona profile_image
            }, JWT_SECRET);
    
            return res.status(200).send({
                mensagem: "Usuário autenticado com sucesso", 
                token: token 
            });
        } catch (error) {
            return res.status(500).send({ mensagem: error.message });
        }
    };




    exports.refreshToken = async (req, res) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ mensagem: 'Token não fornecido' });
            }
            const decoded = jwt.verify(token, JWT_SECRET);

            const [usuario] = await mysql.execute(
                `SELECT id, first_name, last_name, email, birth_date, admin, profile_image FROM users WHERE id = ?`,
                [decoded.id]
            );

            if (!usuario) {
                return res.status(404).json({ mensagem: 'Usuário não encontrado' });
            }

            const newToken = jwt.sign({
                id: usuario.id,
                first_name: usuario.first_name,
                last_name: usuario.last_name,
                email: usuario.email,
                birth_date: usuario.birth_date,
                admin: usuario.admin,
                profile_image: usuario.profile_image
            }, JWT_SECRET);

            return res.status(200).json({
                mensagem: 'Token atualizado com sucesso',
                token: newToken
            });
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    };

    exports.userRequired = async (req, res, next) => {
        try {
            if (!res.locals.admin) {
                return res.status(405).json({ mensagem: 'Usuário não autorizado' });
            }
            next();
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    };