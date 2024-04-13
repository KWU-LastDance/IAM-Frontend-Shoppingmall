import { useState } from 'react'
import '../../App.css'
import Header from '../layouts/Header'
import Item from '../item'
import styled from 'styled-components'

export default function Home() {
  const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin: 10%;
  margin-top: 7%;
  `

  return (
    <>
    <Header></Header>

    <ItemBox>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </ItemBox>
    </>
  )
}
