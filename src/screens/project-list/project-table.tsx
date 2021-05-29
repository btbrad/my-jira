import React from "react";

interface Project {
  id: number;
  name: string;
  userId: number;
  user: string;
}

interface List {
  projectList: Project[];
}

const ProjectTable = ({ projectList }: List) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {projectList.map((item: Project) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.user}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectTable;
