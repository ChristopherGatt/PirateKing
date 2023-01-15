const mongoose = require('mongoose')

const { Schema } = mongoose

// Question Model
const questionsSchema = new Schema({
  questions: {
    type: Array,
    default: [],
  },
  answers: {
    type: Array,
    default: [],
  },
})

const Questions = mongoose.model('Questions', questionsSchema)

module.exports = Questions
