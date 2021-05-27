import React from 'react'

const ProjectTable = ({projectList}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          projectList.map(item => {
            return <tr key={item.id}><td>{item.name}</td><td>{item.user}</td></tr>
          })
        }
      </tbody>
    </table>
  )
}

export default ProjectTable