import SearchBar from "../SearchBar";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
          <nav className="nav">
            <div className="name">
            <p className='top-name' onClick={()=>navigate('/')}>IAM</p>
            <p className='bottom-name'>Intelligence Agricultural Manager</p>
            </div>
            <SearchBar onChange={(e)=>console.log(e.target.value)} />
                    <ul>
                        <li onClick={()=>navigate('/signin')}>로그인</li>
                        <li onClick={()=>navigate('/signup')}>회원가입</li>
                    </ul>

                </nav>
        </>
    )
}

export default Header;