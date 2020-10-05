import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import  { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App;