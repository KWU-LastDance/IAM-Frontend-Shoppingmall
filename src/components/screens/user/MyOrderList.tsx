import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../../layouts/Header';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `

const Body = styled.div`
    max-width: 750px;
    display:flex;
    flex-direction:column;
    width:100%;
    box-sizing:border-box;
    background-color: #F0F0F0;
    align-items:center;
    min-height: 100vh;
    height: 100%;
    padding-top: 20px;
    `

const OrderInfo = styled.div`
    display:flex;
    flex-direction:column;
    padding: 0px 30px;
    width: 600px;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;

        `
const OrderNum = styled.div`
    display:flex;
    font-size: 18px;
    justify-content:space-between;
    height: 50px;
    `
const Info = styled.div`
    display:flex;
    height: 50px;
    font-size: 20px;
    justify-content:space-between;
    `
const Pay = styled.div` 
    display:flex;
    font-size: 18px;
    font-weight: bold;
    justify-content:flex-end;
    `

const HomeBtn = styled.button`
    background-color: #87CB81;
    color: white;
    border: none;
    cursor: pointer;
    margin: 50px;
    padding: 6px 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    width: 130px;
    `

const MyOrderList = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <Container>
            <Body>
            <h2>주문내역</h2>

            <OrderInfo>
            <OrderNum>
            <p>주문 번호 542K4J72</p>
            <p>04.21 결제</p>
            </OrderNum>
            <Info>
            <p style={{fontWeight:"bold"}}>상품 준비 중</p>
            <p>사과 - 상 외 총 3개</p>
            </Info>
            <Pay>
            <p>총 12,000원</p>
            </Pay>
            </OrderInfo>

            <OrderInfo>
            <OrderNum>
            <p>주문 번호 51MJ9E64</p>
            <p>03.30 결제</p>
            </OrderNum>
            <Info>
            <p style={{fontWeight:"bold"}}>배송 완료</p>
            <p>사과 - 중 외 총 5개</p>
            </Info>
            <Pay>
            <p>총 20,000원</p>
            </Pay>
            </OrderInfo>

            <HomeBtn onClick={() => navigate("/")} >홈으로</HomeBtn>
            </Body>
            </Container>
        </div>
    );
}

export default MyOrderList;