const db = require('../config/connection')
const QA = require('../models/questions')

const questionData = require('./questionSeed.json')

db.once('open', async () => {
  await QA.deleteMany()

  await QA.insertMany(questionData)

  console.log('Database Has been Seeded')
  process.exit(0)
})
