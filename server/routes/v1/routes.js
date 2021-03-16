const express = require('express');
const UsersCtrl = require('../../controllers/users');
const router = express.Router()

// User Route

router.get('/user', UsersCtrl.getUsers)
router.get('/user/:id', UsersCtrl.getUserById)
router.post('/user/', UsersCtrl.createUser)
router.put('/user/:id', UsersCtrl.updateUser)
router.delete('/user/:id', UsersCtrl.deleteUser)


module.exports = router