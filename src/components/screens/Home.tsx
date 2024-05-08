import { useEffect, useState } from 'react'
import '../../App.css'
import Header from '../layouts/Header'
import Item from '../item'
import styled from 'styled-components'
import axios from 'axios'

interface ItemProps {
    id: number;
    name: string;
    price: number;
    review: number;
    img: string;
    cnt: number;
  }

export default function Home() {
  const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin: 10%;
  margin-top: 7%;
  `

  const [item, setItem] = useState<ItemProps>([])
  const getItem = async () => {
    try {
        const response = await axios.get('/api/item')
        setItem(response.data)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getItem()
  }, [])

  return (
    <>
    <Header></Header>

    <ItemBox>
      {item.map((i : ItemProps)=>(
        <Item id={i.id} name={i.name} price={i.price} review = {i.review} img={i.img} cnt={i.cnt}></Item>
      ))}
    </ItemBox>
    </>
  )
}
