const express = require('express');
const UsersCtrl = require('../../controllers/users');
const router  = express.Router();

router.get('/', UsersCtrl.getUsers)
router.post('/', UsersCtrl.createUser)

module.exports = router