const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Question {
    question: String
    answer1: String
    answer2: String
    answer3: String
    answer4: String
    correct: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    questions: [Question]
    user: User
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    addQuestion(
      question: String!
      answer1: String!
      answer2: String!
      answer3: String!
      answer4: String!
      correct: String!
    ): Question

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs
