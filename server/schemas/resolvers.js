const { AuthenticationError } = require('apollo-server-express')
const { User, Questions } = require('../models')
const Mongoose = require('mongoose')

const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    questions: async () => {
      return Questions.find()
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    scores: async (parent, args, context) => {
      const a = await User.find({})
      return a.map((e) => {
        let correct = e.results.filter((f) => f.correct === true).length

        return {
          user: e.email,
          name: `${e.firstName} ${e.lastName}`,
          score: correct,
        }
      })
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const correctPw = await user.isCorrectPassword(password)
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const token = signToken(user)
      return { token, user }
    },
    addAnswer: async (parent, { question, answer }, context) => {
      const q = await Questions.findById(Mongoose.Types.ObjectId(question))

      const user = await User.findOne({ _id: context.user._id })
      const r = user.results.map((e) => e.question.toString())

      if (r.indexOf(question) === -1) {
        await user.update({
          $set: {
            results: [
              ...user.results,
              {
                question: new Mongoose.Types.ObjectId(question),
                correct: q.correct === answer,
                answer,
              },
            ],
          },
        })
      } else {
        const l = [...user.results]
        await user.update({
          $set: {
            results: user.results.filter((e) => {
              if (e.question === question) {
                return {
                  ...e,
                  correct: q.correct === answer,
                  answer,
                }
              }
              return e
            }),
          },
        })
      }

      // console.log({ q, question, answer, user });
      return { question, correct: q.correct === answer, answer }
    },
    retakeQuiz: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id })
      await user.update({
        $set: {
          results: [],
        },
      })
      const token = signToken(user)
      return { token, user }
    },
  },
}

module.exports = resolvers
