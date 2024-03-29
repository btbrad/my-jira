/** @jsxImportSource @emotion/react */
import { Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
// import { useMount } from "../../utils/index";
import { useHttp } from "../../utils/http";
// const apiUrl = process.env.REACT_APP_BASE_URL;

interface UserPanelProps {
  params: {
    userId: string;
    name: string;
  };
  setParams: (params: UserPanelProps["params"]) => void;
}

export interface User {
  id: number;
  name: string;
  token: string;
}

const UserPanel = ({ params, setParams }: UserPanelProps) => {
  const [userList, setUserList] = useState([]);

  // useMount(() => {
  //   fetch(`${apiUrl}/users`).then(async (response) => {
  //     if (response.ok) {
  //       setUserList(await response.json());
  //     }
  //   });
  // });

  const client = useHttp();

  useEffect(() => {
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUserList(await response.json());
    //   }
    // });
    client("users").then((data) => setUserList(data));
    // eslint-disable-next-line
  }, []);

  return (
    <Form css={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          placeholder="项目名称"
          value={params.name}
          onChange={({ target }) =>
            setParams({ ...params, name: target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={params.userId}
          onChange={(value) => {
            setParams({
              ...params,
              userId: value,
            });
          }}
        >
          <Select.Option value="">负责人</Select.Option>
          {userList?.map((item: User) => {
            return (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default UserPanel;
