import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../layouts/Header';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 50px;
`
const Info = styled.div`
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: bold;
    `
const OrderBtn = styled.button`
    background-color: #87CB81;
    color: white;
    border: none;
    cursor: pointer;
    margin:auto 10px;
    padding: 6px 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    width: 130px;
    `
    const HomeBtn = styled.button`
    background-color: #87CB81;
    color: white;
    border: none;
    cursor: pointer;
    margin:auto 10px;
    padding: 6px 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    width: 130px;
    `
    const BtnBox = styled.div`
    display:flex;
    justify-content:center;
    `

const CompletedOrder = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Header />
      <Div>
      <h2>주문이 완료되었습니다!</h2>
      <Info>
      <p>
        주문 번호 542K4J72
      </p>
      </Info>
    <BtnBox>
      <OrderBtn onClick={() => navigate("/myorderlist")}>주문 상세</OrderBtn>
      <HomeBtn onClick={() => navigate("/")} >홈으로</HomeBtn>
      </BtnBox>
      </Div>
    </div>
  );
}

export default CompletedOrder;