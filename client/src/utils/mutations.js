import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation addAnswer($question: String!, $answer: Int!) {
    addAnswer(question: $question, answer: $answer) {
      question
      answer
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const RETAKE_QUIZ = gql`
  mutation retakeQuiz {
    retakeQuiz {
      user {
        _id
      }
    }
  }
`;
