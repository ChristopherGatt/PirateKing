const { Schema, model } = require('mongoose')

let questionsSchema = new Schema({
  question: {
    type: String,
  },
  //Array
  answers: [
    {
      type: String,
    },
  ],
  correct: {
    type: Number,
  },
})

const Questions = model('questions', questionsSchema)

module.exports = Questions
