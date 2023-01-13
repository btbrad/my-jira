import { Button, Dropdown, Space } from "antd";
import React from "react";
import ProjectList from "screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import software from "@/assets/software-logo.png";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type={"link"} onClick={() => logout()}>
          退出
        </Button>
      ),
    },
  ];

  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <img src={software} width={"148rem"} alt={"logo"} />
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown menu={{ items }}>
            <Button
              type={"link"}
              onClick={(e: React.MouseEvent) => e.preventDefault()}
            >
              <Space>
                {user ? `Hi, ${user.name}` : ""}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
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

const Header = styled(Row)`
  padding: 3.2rem;
  font-size: 18px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Main = styled.main`
  height: calc(100vh - 60rem);
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
