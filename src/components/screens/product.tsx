import Header from "../layouts/Header";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from 'axios';

const Img = styled.img`
width: 250px;
margin-right: 120px;
    `;

const CountBox = styled.div`
display: flex;
width: 105px;
height: 35px;
margin-left: 30px;
border: 1px solid #F0F0F0;
font-size: 16px;
    `;

const CountBtn = styled.button`
width: 35px;
height: 100%;
    background-color: #F0F0F0;
    border: none;
    font-size: 20px;
    font-weight: 500;
    `;
const Count = styled.input`
width: 35px;
text-align: center;
border: none;
&:focus {
    outline: none;
}
    `;

const OrderBox = styled.div`
display: flex;
flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    margin-left: 30px;
    `

const OrderBtn = styled.button`
    width: 280px;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid #8EEF6E;
    border-radius: 8px;
    background-color: #8EEF6E;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`
const CartBtn = styled.button`
    width: 280px;
    height: 40px;
    border: 2px solid #8EEF6E;
    border-radius: 8px;
    font-size: 16px;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`
const ChooseInfo = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
    `

const Info = styled.div`
    height: 500px;
    width: 85%;
    margin: auto;
    margin-top: 50px;
    border-radius: 3px;
    background-color: #F0F0F0;
    `



const Product = () => {

    const getItem = async () => {
        try {
            const response = await axios.get(`/api/v1/product/${item.id}`)
            console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate();
    const location = useLocation();
    const item = {...location.state};
    console.log(item);
    useEffect(() => {
        getItem()
    }, [])

    const [count, setCount] = useState(1);
    const price : number = item.price;
    const max : number = item.cnt;
    const total : string = (price*count).toLocaleString();

    const [viewInfo, setViewInfo] = useState(true);
    const [viewReview, setViewReview] = useState(false);
    const [viewQnA, setViewQnA] = useState(false);
    const clickInfo = () => {
        setViewInfo(true);
        setViewReview(false);
        setViewQnA(false);
    }
    const clickReview = () => {
        setViewReview(true);
        setViewInfo(false);
        setViewQnA(false);
    }
    const clickQnA = () => {
        setViewQnA(true);
        setViewInfo(false);
        setViewReview(false);
    }

    const onInput = (e) => {
        if(e.target.value>max){
            setCount(max);
        }
        else if(e.target.value<1){
            setCount(1);
        }
        else
        setCount(Number(e.target.value));
    }

    const AddCart = () => {
        if(confirm('장바구니에 추가되었습니다. \n장바구니로 이동하시겠습니까?')){
            // add cart

            navigate('/cart');
        }
    }

    return (
        <>
        <Header></Header>
        <div>
            <div style={{
                display: 'flex',
                width: '80%',
                marginLeft: '30%',
                marginTop: '50px',
            }}>
                <div>
                <Img src={item.img} alt="apple" />
                </div>
                <div style={{
                    textAlign: 'left',
                }}>
                    <h2 style={{
                        marginTop: '40px',
                        marginBottom: '30px',
                    }}>{item.name} (수량 {item.cnt}개)</h2>      

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: '60px',
                        justifyContent: 'space-around',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}>
                    <CountBox>
                    <CountBtn onClick={()=>{
                        setCount(count-1);
                        if(count<=1){
                            setCount(1);
                        }
                        }}>-</CountBtn>
                        <Count value={count} onInput={onInput}></Count>
                    <CountBtn onClick={()=>{
                        setCount(count+1)
                        if(count>=max){
                            setCount(max);
                        }
                    }}>+</CountBtn>
                    </CountBox>
                    <p style={{marginLeft:'30px', fontSize:"17px"}}>{total}원</p> 
                    </div>
                     
                <OrderBox>
                    <OrderBtn onClick={()=>navigate('/order')}>주문하기</OrderBtn>
                    <CartBtn onClick={AddCart}>장바구니</CartBtn>
                </OrderBox>
                </div>
            </div>


            <div style={{
                width: '80%',
                margin: 'auto',
                marginTop: '50px',

            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                {viewInfo && <ChooseInfo style={{fontWeight:'bold'}}>상세 설명</ChooseInfo>}
                {!viewInfo && <ChooseInfo onClick={()=>clickInfo()}>상세 설명</ChooseInfo>}
                {viewReview && <ChooseInfo style={{fontWeight:'bold'}}>리뷰</ChooseInfo>}
                {!viewReview && <ChooseInfo onClick={()=>clickReview()}>리뷰</ChooseInfo>}
                {viewQnA && <ChooseInfo style={{fontWeight:'bold'}}>문의</ChooseInfo>}
                {!viewQnA && <ChooseInfo onClick={()=>clickQnA()}>문의</ChooseInfo>}
                </div>
                <hr />
                {viewInfo && <Info>
                    <p>상품 정보</p>
                    </Info>}
                {viewReview && <Info>
                    <p>리뷰</p>
                    </Info>}
                {viewQnA && <Info>
                    <p>문의</p>
                    </Info>}

            </div>
        </div>
        </>
    );
    }

export default Product;