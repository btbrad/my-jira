import React, { useState, useEffect } from 'react'
import UserPanel from './user-panel.jsx'
import ProjectTable from './project-table.jsx'

const apiUrl = process.env.REACT_APP_BASE_URL

const ProjectList = () => {

  const [projName, setProjName] = useState('')
  const [userName, setUserName] = useState('')
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projectList?${projName ? `name=${projName}`: ''}${userName ? `&userId=${userName}` : ''}`)
      .then(response => {
        if (response.ok) {
          return  response.json()
        }
      })
      .then(data => {
        console.log(data)
        setProjectList(data)
      }
    ) 
  }, [projName, userName])

  return (
    <div>
      <UserPanel projName={projName} setProjName={setProjName} userName={userName} setUserName={setUserName} />
      <ProjectTable projectList={projectList} />
    </div>
  )
}

export default ProjectList