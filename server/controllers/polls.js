const Poll = require('../models/poll');

getPolls = async (req, res) => {
    await Poll.find({}, (err, polls) => {
        if(err){
            return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
        }
        if(!polls.length){
            return res
                .status(404)
                .json({
                    success: false,
                    messsage: `Poll not found`
                })
        }

        return res
            .status(200)
            .json({
                success: true,
                data: polls
            })
    })
}

createPoll = async(req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a poll'
        });
    }
    
    const poll = new Poll(body)

    if (!poll) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
    poll.
        save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: poll._id,
                message: 'Poll created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Poll not created!'
            })
        })
}
module.exports = {
    getPolls,
    createPoll
}