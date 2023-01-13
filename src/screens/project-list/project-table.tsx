import { Table } from "antd";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

interface Project {
  id: number;
  name: string;
  userId: number;
  user: string;
  organization: string;
  created: number;
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
    title: "部门",
    dataIndex: "organization",
    key: "organization",
  },
  {
    title: "负责人",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "创建时间",
    dataIndex: "created",
    key: "created",
    render: (value, project) => {
      return (
        <span>
          {project.created ? dayjs(project.created).format("YYYY-MM-DD") : "无"}
        </span>
      );
    },
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
