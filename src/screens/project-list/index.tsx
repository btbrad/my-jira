import React, { useState, useEffect } from "react";
import * as qs from "qs";
import UserPanel from "./user-panel";
import ProjectTable from "./project-table";
import { cleanObject, useDebouncedParam } from "../../utils/index";

const apiUrl = process.env.REACT_APP_BASE_URL;

const ProjectList = () => {
  const [params, setParams] = useState({
    userId: "",
    name: "",
  });
  const [projectList, setProjectList] = useState([]);

  const debouncedParams = useDebouncedParam(params, 2000);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(params))}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setProjectList(data);
      });
  }, [debouncedParams]);

  return (
    <div>
      <UserPanel params={params} setParams={setParams} />
      <ProjectTable projectList={projectList} />
    </div>
  );
};

export default ProjectList;
