import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../../layouts/Header';

const MyOrderList = () => {
    return (
        <div>
            <Header />
            <h2>주문내역</h2>

            <p>주문 번호 542K4J72</p>

        </div>
    );
}

export default MyOrderList;