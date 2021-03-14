const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    created_at: { type: Date },
    updated_at: { type: Date }
  },{ 
    timestamps: { 
      createdAt: 'created_at', 
      updatedAt: 'updated_at' 
    }
  }
);

User.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
});

module.exports = mongoose.model('users', User);