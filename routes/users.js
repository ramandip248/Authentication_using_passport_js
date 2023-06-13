const express = require('express');

const userController = require('../controllers/users_controller');
const router = express.Router();

router.get('/profile',userController.profile);
router.get('/signup',userController.signUp);

router.post('/create',userController.create);



module.exports = router;