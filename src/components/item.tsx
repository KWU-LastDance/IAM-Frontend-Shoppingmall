import { useNavigate } from "react-router-dom";

const Item = () => {
    const navigate = useNavigate();
    return (
    <div className="item" onClick={()=>navigate('./product')}>
        <img src='../public/img/apple.jpg' alt="apple" className="itemImg" />
        <div className="itemInfo">
        <div className="itemName">사과 - 상</div>
        <div className="itemPrice">3000원</div>
        <div className="itemReview">리뷰 2건</div>
        </div>
    </div>
    );
}

export default Item;
