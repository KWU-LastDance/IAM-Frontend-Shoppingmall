import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/screens/Home'
import SignUp from './components/screens/signUp'
import SignIn from './components/screens/signIn'

import Product from './components/screens/product'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />

      <Route path='/product' element={<Product />} />
    </Routes>
  )
}

export default App
