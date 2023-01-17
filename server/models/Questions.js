const { Schema, model } = require('mongoose')

let qaSchema = new Schema({
  question: {
    type: String,
  },
  answer1: {
    type: String,
  },
  answer2: {
    type: String,
  },
  answer3: {
    type: String,
  },
  answer4: {
    type: String,
  },
  correct: {
    type: String,
  },
})

const QA = model('qa', qaSchema)

module.exports = QA
