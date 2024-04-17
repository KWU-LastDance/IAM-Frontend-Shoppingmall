import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/screens/Home'
import SignUp from './components/screens/signUp'
import SignIn from './components/screens/signIn'

import Product from './components/screens/product'
import Order from './components/screens/order'
import Cart from './components/screens/user/cart'
import CompletedOrder from './components/screens/CompletedOrder'

import MyOrderList from './components/screens/user/MyOrderList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />

      <Route path='/product' element={<Product />} />
      <Route path='/order' element={<Order />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/completedorder' element={<CompletedOrder />} />

      <Route path='/myorderlist' element={<MyOrderList />} />
    </Routes>
  )
}

export default App
