import SearchBar from "../SearchBar";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #87CB81;
    `;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-left: 90px;
    margin: 0;
    margin-right: 10px;
    `;

const NavItem = styled.li`
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
        cursor: pointer;
    }
    `

const Name = styled.div`
display: flex;
align-items: center;
margin: 2%;
&:hover {
    cursor: pointer;
}
    `;

const Topname = styled.p`
font-weight: 700;
font-size: 30px;
margin: 0;
padding: 0;
`
const Bottomname = styled.p`
margin-left: 10px;
padding-top: 8px;
`

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
          <Nav>
            <Name onClick={()=>navigate('/')}>
            <Topname>IAM</Topname>
            <Bottomname>Intelligence Agricultural Manager</Bottomname>
            </Name>
            <SearchBar onChange={(e)=>console.log(e.target.value)} />
                    <Ul>
                        <NavItem onClick={()=>navigate('/signin')}>로그인</NavItem>
                        <NavItem onClick={()=>navigate('/signup')}>회원가입</NavItem>
                    </Ul>

                </Nav>
        </>
    )
}

export default Header;