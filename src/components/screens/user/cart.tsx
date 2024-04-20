import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../layouts/Header';

const Body = styled.div`
    margin-top: 30px;
    width: 60vw;
    text-align: center;
    margin-left: 20vw;
    margin-bottom: 50px;
    `

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    
    `
const Hr = styled.hr`
    width: 100%;
    border: 1px solid #F0F0F0;
    `

const Select = styled.div`
    height: 30px;
    display: flex;
    width: 130px;
    align-items: center;
    `
const AllCheck = styled.input`
    width: 80px;
    height: 20px;
    `

const Items = styled.div`
    display: flex;
    flex-direction: column;
    `

const Item = styled.div`
    display: flex;
    margin: 20px;
    font-size: 17px;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
    position: relative;
    `
const Img = styled.img`
    width: 100px;
    height: 100px;
    `
const Info = styled.div`
    display: flex;
    margin-left: 50px;
    margin-bottom: 10px;
    align-items: center;
    `
    const CountBox = styled.div`
    display: flex;
    width: 105px;
    height: 35px;
    border: 1px solid #F0F0F0;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
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

    const Delivery = styled.div`
    display: flex;
    justify-content: right;
    margin-left: 70px;
    margin-right: 50px;
    font-size: 17px;
    `

    const Total = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 50px;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    `
    const OrderBtn = styled.button`
    margin-left: 40px;
    width: 110px;
    height: 40px;
    border: 1px solid #8EEF6E;
    border-radius: 8px;
    background-color: #8EEF6E;
    font-size: 17px;
    font-weight: 700;
    &:hover {
        cursor: pointer;
    }
`

const TitleText = styled.p`
    font-size: 17px;
    font-weight: 600;
    width: 100px;
    `
const Text = styled.p`
    font-size: 17px;
    width: 100px;
    `
const Check = styled.input`
    width: 130px;
    height: 20px;
    `

const SinglePrice = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-top: 70px;
    margin-left: 360px;
    display: flex;
    width: 200px;
    `

const Cart = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const price : number = 3000;
    const max : number = 99;
    const item : string = (price*count).toLocaleString();
    const total : string = (price*count+3000).toLocaleString();

    const onInput = (e) => {
        if(e.target.value>max){
            setCount(max);
        }
        else if(e.target.value<1){
            setCount(1);
        }
        else
        setCount(e.target.value);
    }

    const data = [
        {id:1, name:'사과 - 상', price:3000, img:'../public/img/apple.jpg', count:1},
        {id:2, name:'사과 - 중', price:2500, img:'../public/img/apple.jpg', count:1},
    ]
    const [checkItems, setCheckItems] = useState([]);
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            setCheckItems([...checkItems, id]);
        } else {
            setCheckItems(checkItems.filter((item)=> item !== id))
        }
    }
    const handleAllCheck = (checked) => {
        if (checked) {
            const temp : number[] = [];
            data.forEach((item)=> temp.push(item.id));
            setCheckItems(temp);
        } else {
            setCheckItems([]);
        }
    }

    const clickPlus = (cnt) => {
        cnt = cnt+1;
        console.log(cnt);
        return cnt;
    }

    return (
        <>
            <Header />
            <Body>
            <h2>장바구니</h2>
            <ItemBox>
                <Info>
                    <Select>
                        <TitleText>전체선택</TitleText>
                        <AllCheck type='checkbox' name='select_all' 
                        onChange={(e)=>handleAllCheck(e.target.checked)} 
                        checked={checkItems.length===data.length ? true : false}></AllCheck>
                    </Select>
                </Info>
                <Hr />

                <Items>
                <Item>
                    <Check type='checkbox' name='select'
                    onChange={(e)=>handleSingleCheck(e.target.checked, 1)}
                    ></Check>
                    
                    <Img src="../public/img/apple.jpg" />
                    <div style={{
                                marginLeft: '30px', textAlign:'left'
                            }}>
                    <Text>사과 - 상</Text>
                    
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
                    </div>

                    <SinglePrice>{item}원</SinglePrice>
                </Item>

                    {data.map((item)=>(
                        <div>
                            <Hr />                        
                        <Item key={item.id}>
                            <Check type='checkbox' name='select' 
                            onChange={(e)=>handleSingleCheck(e.target.checked, item.id)} 
                            checked={checkItems.includes(item.id) ? true : false}></Check>

                            <Img src={item.img} />
                            <div style={{
                                marginLeft: '30px', textAlign:'left'
                            }}>
                            <Text>{item.name}</Text>
                            <CountBox>
                            <CountBtn onClick={()=>{
                                // setCount(item.count-1);
                                if(item.count<=1){
                                    item.count=1;
                                }
                                }}>-</CountBtn>
                                <Count value={item.count} onInput={onInput}></Count>
                            <CountBtn onClick={()=>{
                                clickPlus(item.count);
                                if(item.count>=max){
                                    setCount(max);
                                }
                            }}>+</CountBtn>
                            </CountBox>
                            </div>

                            <SinglePrice>{item.price}원</SinglePrice>
                        
                        </Item>
                        </div>
                        
                    ))}

                </Items>    
                <Delivery>
                    <p>배송비 3,000원</p>
                </Delivery>

                <Hr />

                <Total>
                    <p>총 금액 {total}원</p>
                    <OrderBtn onClick={()=>navigate('/order')}>주문하기</OrderBtn>
                </Total>

            </ItemBox>

            </Body>
        </>
    );
}

export default Cart;
