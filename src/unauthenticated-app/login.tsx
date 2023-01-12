import { useAuth } from "context/auth-context";
import React from "react";
import { Form, Input, Button } from "antd";

// const apiUrl = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const authContext = useAuth();

  const onFinish = (values: { username: string; password: string }) => {
    console.log("Success:", values);
    authContext.login({ ...values });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {authContext.user ? `当前用户：${authContext.user.name}` : ""}
      <Form
        initialValues={{ username: "admin", password: "123456" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input placeholder="用户" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
