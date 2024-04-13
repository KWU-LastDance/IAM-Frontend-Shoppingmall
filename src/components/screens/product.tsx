import Header from "../layouts/Header";
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CountBox = styled.div`
width: 35px;
height: 35px;
border: 1px solid lightgray;
font-size: 16px;
margin-top: 10px;
margin-bottom: 10px;
    `;

const CountBtn = styled.button`
width: 100%;
height: 100%;
    background-color: lightgray;
    border: none;
    font-size: 20px;
    font-weight: 500;
    `;
const Count = styled.div`
width: 100%;
height: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
    `;

const OrderBtn = styled.button`
    width: 105px;
    height: 40px;
    border: 1px solid #8EEF6E;
    border-radius: 8px;
    background-color: #8EEF6E;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
`
const CartBtn = styled.button`
    width: 105px;
    height: 40px;
    border: 2px solid #8EEF6E;
    border-radius: 8px;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    margin-left: 15px;
`
const ChooseInfo = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
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
    const navigate = useNavigate();

    const [count, setCount] = useState(1);
    const price : number = 3000;
    const max : number = 99;

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

    return (
        <>
        <Header></Header>
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 'auto',
                marginTop: '50px',
            }}>
                <div>
                <img src='../public/img/apple.jpg' alt="apple" />
                </div>
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <h2>사과 - 상</h2>
                    <p style={{marginLeft:'30px'}}>3,000원</p>                        
                    </div>

                    <p>남은 수량 99개</p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                       
                    }}>
                    <CountBox>
                    <CountBtn onClick={()=>{
                        setCount(count-1);
                        if(count<=1){
                            setCount(1);
                        }
                        }}>-</CountBtn>
                    </CountBox>
                    <CountBox><Count>{count}</Count></CountBox>
                    <CountBox>
                    <CountBtn onClick={()=>{
                        setCount(count+1)
                        if(count>=max){
                            setCount(max);
                        }
                    }}>+</CountBtn>
                    </CountBox>

                    <p>총 금액 {price*count}원</p>
                    </div>
                <div>
                    <OrderBtn onClick={()=>navigate('/order')}>주문하기</OrderBtn>
                    <CartBtn onClick={()=>navigate('/cart')}>장바구니</CartBtn>
                </div>
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
                <ChooseInfo onClick={()=>clickInfo()}>상세 설명</ChooseInfo>
                <ChooseInfo onClick={()=>clickReview()}>리뷰</ChooseInfo>
                <ChooseInfo onClick={()=>clickQnA()}>문의</ChooseInfo>
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