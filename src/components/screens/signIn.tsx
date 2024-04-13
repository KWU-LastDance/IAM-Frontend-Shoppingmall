import Header from "../layouts/Header";
import styled from 'styled-components';

const SignInBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 5%;
`;
const Login = styled.p`
font-size: 24px;
font-weight: 700;
`;

const InputBox = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`;

const IdInput = styled.input`
display: flex;
flex-direction: column;
width: 220px;
height: 40px;
padding-left: 10px;
border: 1px solid #99D584;
border-radius: 5px;
border-bottom: none;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
&:focus {
    outline: none;
}
`;

const PwInput = styled.input`
display: flex;
flex-direction: column;
width: 220px;
height: 40px;
padding-left: 10px;
border: 1px solid #99D584;
border-radius: 5px;
border-top-left-radius: 0;
border-top-right-radius: 0;
&:focus {
    outline: none;
}
`;

const Button = styled.button`
margin-top: 30px;
width: 100%;
height: 40px;
background-color: #99D584;
border: none;
border-radius: 5px;
color: white;
font-size: 20px;
`;

const Label = styled.label`
display: none;
`

const SignIn = () => {

    return (
        <>
        <Header></Header>
        <SignInBox>
            <Login>로그인</Login>
            <InputBox>
            <form>
                <Label>아이디</Label>
                <IdInput type="text" id="id" placeholder="아이디"></IdInput>
                <Label>비밀번호</Label>
                <PwInput type="password" id="pw" placeholder="비밀번호 (8-12자)"></PwInput>
                <Button>로그인</Button>
            </form>
            </InputBox>
        </SignInBox>
        </>
    );
    }

export default SignIn;