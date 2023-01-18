import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Quiz from './pages/Quiz'
import ScoreBoard from './pages/ScoreBoard'
import QuizComplete from './pages/QuizComplete'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* <Route
                path="/success"
                element={
                  <ProtectedRoute>
                    <Success />
                  </ProtectedRoute>
                }
              /> */}
            <Route
              path="/complete"
              element={
                <ProtectedRoute>
                  <QuizComplete />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/scoreboard"
              element={
                <ProtectedRoute>
                  <ScoreBoard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
