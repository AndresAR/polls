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
        if (!users.length) {
            console.log()
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
    }).catch(err => console.log(err));
}

createUser = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        });
    }
    body.password = crypto.createHash('md5').update(body.password).digest("hex");
    const user = new User(body)

    if (!user) {
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
    if (!body) {
        return status(400).json({
            success: false,
            error: 'You must provide a body to update'
        })
    }
    User.findOne({ _id: req.params.id }, (err, users) => {
        if (err) {
            return res
                .status(404)
                .json({
                    error: err,
                    message: `User not found!`

                })
        }
        users.name = body.name
        users.lastname = body.lastname
        users.save()
            .then(() => {
                return res
                    .status(200)
                    .json({
                        success: true,
                        id: users._id,
                        message: `User updated!`
                    })
            })
            .catch(error => {
                return res
                    .status(404)
                    .json({
                        error,
                        message: `User not found!`
                    })
            })

    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
        }
        if (!user) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `User not found`
                })
        }

        return res
            .status(200)
            .json({
                sucess: true,
                data: user
            })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    console.log("BY ID >>>>>>>>>>>>>>>>>>>")
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
        }
        if (!user) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `User not found`
                })
        }
        return res
            .status(200)
            .json({
                success: true,
                data: user
            })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    getUserById
}