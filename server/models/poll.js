const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Poll = new Schema(
  {
    topic: String,
    choices: [
        {
            value: String,
            votes: Number
        }
    ],
    created_at: { type: Date },
    updated_at: { type: Date }
  },{ 
    timestamps: { 
      createdAt: 'created_at', 
      updatedAt: 'updated_at' 
    }
  }
);

Poll.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
});

module.exports = mongoose.model('polls', Poll);