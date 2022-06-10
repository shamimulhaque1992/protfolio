import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading/Loading";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectsDescription.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects];
};

export default useProjects;
