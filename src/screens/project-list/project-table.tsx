import { Table } from "antd";
import React from "react";
import type { ColumnsType } from "antd/es/table";

interface Project {
  id: number;
  name: string;
  userId: number;
  user: string;
}

interface List {
  projectList: Project[];
}

const columns: ColumnsType<Project> = [
  {
    title: "项目名称",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "负责人",
    dataIndex: "user",
    key: "user",
  },
];

const ProjectTable = ({ projectList }: List) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={projectList}
        rowKey={(record) => record.id}
        pagination={false}
      ></Table>
    </>
  );
};

export default ProjectTable;
