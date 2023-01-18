const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Question {
    _id: ID
    question: String
    answers: [String]
    correct: Int
  }

  type Result {
    question: Question
    answer: Int
    correct: Boolean
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    results: [Result]
  }

  type Auth {
    token: ID
    user: User
  }

  type Score {
    user: String
    name: String
    score: Int
  }

  type Answer {
    question: String
    answer: Int
    correct: Boolean
  }

  type Query {
    questions: [Question]
    me: User
    scores: [Score]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth

    addAnswer(question: String!, answer: Int!): Answer

    retakeQuiz: Auth
  }
`

module.exports = typeDefs
