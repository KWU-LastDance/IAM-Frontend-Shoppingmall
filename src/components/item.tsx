import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const Item = () => {
    const navigate = useNavigate();
    return (
    <ItemBox onClick={()=>navigate('./product')}>
        <ItemImg src='../public/img/apple.jpg' alt="apple"/>
        <ItemInfo>
        <ItemName>사과 - 상</ItemName>
        <ItemPrice>3000원</ItemPrice>
        <ItemReview>리뷰 2건</ItemReview>
        </ItemInfo>
    </ItemBox>
    );
}

export default Item;
