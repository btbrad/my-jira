import { useAuth } from "context/auth-context";
import React, { useState, ChangeEvent } from "react";

// const apiUrl = process.env.REACT_APP_BASE_URL;

const Register = () => {
  const authContext = useAuth();

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

  const register = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("register", formData);
    // fetch(`${apiUrl}/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((response) => {
    //   if (response.ok) {
    //     response.json().then((res) => {
    //       console.log(res);
    //     });
    //   }
    // });
    authContext.register(formData);
  };

  return (
    <>
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
        <button onClick={register}>注册</button>
      </form>
    </>
  );
};

export default Register;
