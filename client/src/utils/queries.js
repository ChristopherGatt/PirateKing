import { gql } from '@apollo/client'

export const QUERY_QUESTIONS = gql`
  query questions {
    questions {
      question
      answer1
      answer2
      answer3
      answer4
      correct
    }
  }
`
export const QUERY_SCORE = gql`
  query getScore {
    score {
      name
      correct
    }
  }
`

export const QUERY_PRODUCTS = gql`
  query questions($category: ID) {
    questions(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`
export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`
