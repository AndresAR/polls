const express = require('express');
const UsersCtrl = require('../../controllers/users');
const PollsCtrl = require('../../controllers/polls')
const router = express.Router()

// User Route

router.get('/user', UsersCtrl.getUsers)
router.get('/user/:id', UsersCtrl.getUserById)
router.post('/user/', UsersCtrl.createUser)
router.put('/user/:id', UsersCtrl.updateUser)
router.delete('/user/:id', UsersCtrl.deleteUser)

// Poll Route

router.get('/poll', PollsCtrl.getPolls)
router.post('/poll', PollsCtrl.createPoll)
router.post('/poll/:pollId/vote', PollsCtrl.votePoll)
module.exports = router