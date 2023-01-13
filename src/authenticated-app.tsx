import { Button } from "antd";
import React from "react";
import ProjectList from "screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button danger onClick={() => logout()}>
            登出
          </Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr;
`;

const Header = styled(Row)``;

const Main = styled.main`
  height: calc(100vh - 60rem);
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
