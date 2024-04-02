import { useState } from 'react'
import '../../App.css'
import Header from '../layouts/Header'
import Item from '../item'

export default function Home() {

  return (
    <>
    <Header></Header>

    <div className='itemBox'>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
    </>
  )
}
