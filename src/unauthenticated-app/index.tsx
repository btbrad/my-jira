import { useState } from "react";
import Register from "unauthenticated-app/register";
import Login from "unauthenticated-app/login";
import { Button, Card, Divider } from "antd";
import styled from "@emotion/styled";
import logo from "@/assets/logo.png";
import left from "@/assets/left.png";
import right from "@/assets/right.png";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <Register /> : <Login />}
        <Divider />
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册一个账号"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh; ;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  margin: 0 auto;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100rem;
  margin: 0 auto;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left center, right center;
  background-size: 60rem, 60rem, cover;
  background-image: url(${left}), url(${right});
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgba(94, 108, 132);
`;
