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
    <div>
      <input
        type="text"
        value={params.name}
        onChange={({ target }) => setParams({ ...params, name: target.value })}
      />
      <select
        value={params.userId}
        onChange={({ target }) => {
          setParams({
            ...params,
            userId: target.value,
          });
        }}
      >
        <option value="">负责人</option>
        {userList?.map((item: User) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default UserPanel;
