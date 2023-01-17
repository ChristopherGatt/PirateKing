const { Schema, model } = require('mongoose')

let quizSchema = new Schema({
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  qas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'qa',
    },
  ],
  highScore: {
    type: Number,
  },
})

const Quiz = model('quiz', quizSchema)

module.exports = Quiz
