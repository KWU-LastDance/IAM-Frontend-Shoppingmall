import Header from "../layouts/Header";
import styled from 'styled-components';

const SignUpBox = styled.div`
display: flex;
flex-direction: column;
margin: 3%;
align-items: center;
justify-content: center;
`;

const Join = styled.p`
font-size: 24px;
font-weight: 700;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 10px;
`;

const Div = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
`;

const Label = styled.div`
height: 40px;
margin-right: 45px;
display: flex;
align-items: center;
width: 120px;
`

const Input = styled.input`
width: 250px;
height: 40px;
padding-left: 10px;
border: 1px solid #99D584;
border-radius: 5px;
`;

const Button = styled.button`
margin-top: 30px;
width: 70%;
height: 40px;
background-color: #99D584;
border: none;
border-radius: 5px;
color: white;
font-size: 20px;
align-self: center;
`;

const SignUp = () => {
    
    return (
        <>
        <Header></Header>
        <SignUpBox>
        <Join>회원가입</Join>
        <Form>
            <Div>
            <Label>아이디</Label>
            <Input type="text" id="id"></Input>
            </Div>
            <Div>
            <Label>비밀번호</Label>
            <Input type="password" id="pw" ></Input>
            </Div>
            <Div>
            <Label>비밀번호 확인</Label>
            <Input type="password" id="pwCheck" ></Input>
            </Div>
            <Div>
            <Label>이름</Label>
            <Input type="text" id="name"></Input>
            </Div>
            <Div>
            <Label>전화번호</Label>
            <Input type="text" id="phone"></Input>
            </Div>
            <Button>회원가입</Button>
        </Form>
        </SignUpBox>
        </>
    );
    }

export default SignUp;