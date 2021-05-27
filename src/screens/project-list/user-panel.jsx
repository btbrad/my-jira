import React, { useState, useEffect } from 'react'
const apiUrl = process.env.REACT_APP_BASE_URL

console.log(process.env)
const UserPanel = ({projName, setProjName, userName, setUserName}) => {

  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/userList`)
      .then(response => {
        if (response.ok) {
          return  response.json()
        }
      })
      .then(data => {
        console.log(data)
        setUserList(data)
      }
    ) 
  }, [])

  return (
    <div>
    <input type="text" value={projName} onChange={ ({target}) => setProjName(target.value)}/>
    <select value={userName} onChange={({target}) => {
      console.log(111, target.value)
      setUserName(target.value)
    }}>
      <option value="">负责人</option>
      {
        userList.map(item => {
          return <option value={item.id} key={item.id}>{item.name}</option>
        })
      }
    </select>
    </div>
  )
}

export default UserPanel