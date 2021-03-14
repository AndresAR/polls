const User = require('../models/user');
const crypto = require('crypto');

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({
                success: false, 
                error: err
            });
        }
        if(!users.lenght){
            return res
            .status(404)
            .json({
                success: false, 
                error: 'User not found'
            });
        }
        return res.status(200).json({
            success: true, 
            data: users
        });
    }).catch (err => console.log(err));
}

createUser = (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        });
    }
    body.password = crypto.createHash('md5').update(body.password).digest("hex");
    const user = new User(body)

    if(!user) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
    user.
        save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!'
            })
        })
        .catch(error => { 
            return res.status(400).json({
                error,
                message: 'User not created!'
            })
         })
}

updateUser = async (req, res) => {
    const body = req.body
    if(!body){
        return status(400).json({
            success: false,
            error: 'You must provide a body to update'
        })
    }
}


module.exports = {
    createUser,
    getUsers,
}