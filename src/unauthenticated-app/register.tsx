import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import React from "react";
import styled from "@emotion/styled";

// const apiUrl = process.env.REACT_APP_BASE_URL;

const Register = () => {
  const authContext = useAuth();

  const onFinish = (values: { username: string; password: string }) => {
    console.log("Success:", values);
    authContext.register({ ...values });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="用户"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <LongButton type="primary" htmlType="submit">
            注册
          </LongButton>
        </Form.Item>
      </Form>
    </>
  );
};

const LongButton = styled(Button)`
  width: 100%;
`;

export default Register;
