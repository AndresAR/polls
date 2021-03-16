const express = require('express');
const UsersCtrl = require('../../controllers/users');
const router  = express.Router();

router.get('/', UsersCtrl.getUsers)
router.post('/', UsersCtrl.createUser)
router.put('/:id', UsersCtrl.updateUser)
router.delete('/:id', UsersCtrl.deleteUser)
router.get('/:id', UsersCtrl.getUserById)

module.exports = router