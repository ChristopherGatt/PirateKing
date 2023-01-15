const mongoose = require('mongoose')

const { Schema } = mongoose

//Scoreboard Model
const scoreSchema = new Schema({
  name: {
    type: string,
  },

  totalScore: {
    type: integer,
    default: [],
  },
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score
