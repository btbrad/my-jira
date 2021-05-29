import React, { useState } from "react";
import { useMount } from "../../utils/index";
const apiUrl = process.env.REACT_APP_BASE_URL;

interface UserPanelProps {
  params: {
    userId: string;
    name: string;
  };
  setParams: (params: UserPanelProps["params"]) => void;
}

interface User {
  id: number;
  name: string;
}

const UserPanel = ({ params, setParams }: UserPanelProps) => {
  const [userList, setUserList] = useState([]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUserList(await response.json());
      }
    });
  });

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
