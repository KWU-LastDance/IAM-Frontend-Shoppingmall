import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useState } from 'react';

    const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `

    const Bar = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    max-width: 850px;
    background-color: #5F5F5F;
    color: white;
    align-items:center;
    height:50px;
    text-align:center;
    width:100%;
    `

    const BackBtn = styled.button`
    position:absolute;
    left: 10px;
        background-color: #5F5F5F;
        color: white;
        border: none;
        cursor: pointer;
        margin:auto 10px;
        `
    const Svg = styled.svg`
        width: 25px;
        height: 25px;
        `

    const Top = styled.div`
        font-size:20px;
        font-weight:bold;
        align-items:center;
        `

    const Body = styled.div`
        max-width: 850px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;
        text-align:left;
        border-left:1px solid lightgray;
        border-right:1px solid lightgray;
        box-sizing:border-box;
        `
    
    const Div = styled.div`
    margin-left:20px;
    margin-right:20px;
        `

    const FormDiv = styled.div`
        display:flex;
        margin-bottom:10px;
        align-items:center;
        height:38px;
        `

    const Label = styled.label`
        font-size:17px;
        width:120px;
        `
    const User = styled.p`
        width:100%;
        padding-left:5px;
        `

    const Input = styled.input`
        width:100%;
        height:36px;
        padding-left:8px;
        border:1px solid lightgray;
        border-radius:3px;
        font-size:14px;
        `

    const PostInput = styled.input`
        width:130px;
        height:36px;
        padding-left:8px;
        font-size:14px;
        border: 1px solid lightgray;
        border-top-left-radius:3px;
        border-bottom-left-radius:3px;
        `
    const PostSearch = styled.div`
        display:flex;
        width:100%;
        height:40.1px;
        align-items:center;
        color:white;
        font-size:15px;
        cursor:pointer;
        `

    const PostSearchBtn = styled.button`
        width:88px;
        height:100%;
        font-size:15px;
        cursor:pointer;
        border: 1px solid gray;
        `

    const Pay = styled.div`
        flex-direction:column;
    `
    
    const Title = styled.p`
        font-size:20px;
        font-weight:bold;
        `

    const ItemBox = styled.div`
        display:flex;
        margin-bottom:20px;
        `
    const Img = styled.img`
        width:100px;
        height:100%;
        margin-right:20px;
        `
    const ItemText = styled.div`
        flex-direction:column;
        font-size:14px;
        `

    const PaySelect = styled.button`
        justify-content:center;
        align-items:center;
        width:100%;
        height:40px;
        background-color:white;
        font-size:15px;
        border: 1px solid gray;
        cursor:pointer;
        margin-bottom:5px;
        `

    const PayButton = styled.button`
        justify-content:center;
        align-items:center;
        width:100%;
        height:50px;
        background-color:#2F2F2F;
        color:white;
        font-size:17px;
        border: 1px solid black;
        cursor:pointer;
        `
    const Agree = styled.p`
        font-size:15px;
        margin: 40px 0 30px 20px;
        `

    const Order = () => {
        const navigate = useNavigate();

        const [isPay, setIsPay] = useState(false);
        
    return (
        <Container>
        <Bar>
            <BackBtn onClick={()=>{navigate(-1)}}>
            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</Svg>
</BackBtn>
            <Top>IAM   주문/결제</Top>
        </Bar>

        <Body>
            <Div>
            <Title>배송지</Title>
            <FormDiv>
            <Label htmlFor="name">받는사람</Label>
            <User>김이름</User>
            </FormDiv>
            <FormDiv>
            <Label htmlFor="phone">전화번호</Label>
            <User>010-1234-5678</User>
            </FormDiv>
            <FormDiv>
            <Label htmlFor="address">주소</Label>
            <PostSearch>
                <PostInput type="text" id="post" name="post" placeholder='우편번호'/>
                <PostSearchBtn>주소 검색</PostSearchBtn>
            </PostSearch>
            </FormDiv>
            <FormDiv>
            <Input type="text" id="address" name="address" placeholder='기본주소'/>      
            </FormDiv>
            <FormDiv>          
            <Input type="text" id="detailAddress" name="detailAddress" placeholder='상세주소'/>
            </FormDiv>
            <hr style={{border:'1px solid lightgray', width:'100%'}}/>
            </Div>
            <Div>
            <Title>주문상품</Title>
                <ItemBox>
                    <Img src="../public/img/apple.jpg" alt="상품이미지"/>
                    <ItemText>
                    <p>사과 - 상</p>
                    <p>수량: 1개</p>
                    <p>3,000원</p>
                    </ItemText>
                </ItemBox>
                </Div>

                <hr style={{border:'1px solid lightgray', width:'100%'}}/>

        <Div>
            <Title>결제금액</Title>
            <p>상품금액 3,000원</p>
            <p>배송비 +3,000원</p>
            <p style={{
                fontWeight: 'bold',
                fontSize: '17px'
            }}>총 결제금액 6,000원</p>

        </Div>
        <hr style={{border:'1px solid lightgray', width:'100%'}}/>
        
        <Div>
        <Pay>
            <Title>결제수단 선택</Title>
            <PaySelect>무통장입금</PaySelect>
            <PaySelect>신용카드</PaySelect>
            <PaySelect>휴대폰결제</PaySelect>
        </Pay>
        </Div>
        <Agree>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</Agree>         

        <PayButton onClick={()=>navigate('/completedorder')}>6,000원 결제하기</PayButton>
        </Body>
        </Container>
    );
}

export default Order;