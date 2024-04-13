import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../layouts/Header';

const HomeBtn = styled.button`
    background-color: #87CB81;
    color: white;
    border: none;
    cursor: pointer;
    margin:auto 10px;
    padding: 6px 10px;
    font-size: 20px;
    border-radius: 5px;
    `

const CompletedOrder = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Header />

      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문 상품
      </p>
      <p>
        주문 번호
      </p>
      <HomeBtn onClick={() => navigate("/")} >홈으로</HomeBtn>
    </div>
  );
}

export default CompletedOrder;