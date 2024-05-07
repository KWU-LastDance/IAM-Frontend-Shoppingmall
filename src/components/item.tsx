import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ItemBox = styled.div`
margin: 10%;
text-align: left;
width: 70%;
`
const ItemImg = styled.img`
width: 100%;
`
const ItemInfo = styled.div`
margin-left: 10%;
`
const ItemName = styled.div`
font-size: 1.3rem;
font-weight: 700;
`
const ItemPrice = styled.div`
font-size: 1.1rem;
font-weight: 500;
`
const ItemReview = styled.div`
font-size: 1rem;
font-weight: 400;
`

const Item = (props) => {
    const { id, name, price, review, img, cnt } = props

    const navigate = useNavigate();

    const [item, setItem] = useState<ItemProps>([])

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await axios.get('/api/item')
                setItem(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getItem()
    }, [])

    return (
            <ItemBox onClick={()=>navigate('./product:id')}>
        <ItemImg src={img} alt="apple"/>
        <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}원</ItemPrice>
        <ItemReview>리뷰 {review}건</ItemReview>
        </ItemInfo>
    </ItemBox>
    );
}

export default Item;
