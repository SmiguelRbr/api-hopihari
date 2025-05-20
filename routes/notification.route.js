const express = require('express');
const router = express.Router();
const login = require('../middleware/usuario.middleware'); 
const notificationController = require('../controllers/notification.controller');

router.get('/', login.required, notificationController.getNotifications );  
router.put('/:idNotification', login.required, notificationController.putNotification );

module.exports = router;