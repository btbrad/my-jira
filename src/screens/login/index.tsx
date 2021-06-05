import React, { useState, ChangeEvent } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(event)
  // }

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      username: event.target.value,
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  const login = () => {
    console.log("login", formData);
  };

  return (
    <form>
      <label htmlFor="username">用户：</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleUsernameChange}
      />
      <br />
      <label htmlFor="password">密码：</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={login}>登录</button>
    </form>
  );
};

export default Login;
