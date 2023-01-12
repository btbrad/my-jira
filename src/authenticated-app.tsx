import { Button } from "antd";
import React from "react";
import ProjectList from "screens/project-list";
import { useAuth } from "./context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button danger onClick={() => logout()}>
        登出
      </Button>
      <ProjectList />
    </div>
  );
};
