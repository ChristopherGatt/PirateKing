import { gql } from '@apollo/client'

export const QUERY_QUESTIONS = gql`
  query questions {
    questions {
      _id
      question
      answers
      correct
    }
  }
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      firstName
      lastName
    }
  }
`

export const QUERY_MY_RESULTS = gql`
  query myResults {
    me {
      _id
      results {
        question {
          _id
        }
        correct
        answer
      }
    }
  }
`

export const QUERY_SCORES = gql`
  query scores {
    scores {
      user
      name
      score
    }
  }
`
