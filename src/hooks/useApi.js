import { useEffect, useState } from "react";
import dataUrl from "../data/data.json?url";

function useApi(method, url, body, options) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(method === "GET");
  const [_reload, setReload] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method,
      body,
      ...options,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [method, url, body, options, _reload]);

  const reload = () => setReload(_reload + 1);
  return { data, error, loading, reload };
}

export const useFetchData = () => useApi("GET", dataUrl);

export const useFetchProject = (id) => {
  let { data, ...rest } = useFetchProjects();
  const projects = data?.find((project) => project.id === id);
  return { data: projects, ...rest };
};

export const useFetchProjects = () => {
  let { data, ...rest } = useFetchData("GET", dataUrl);
  return { data: data?.projects ?? [], ...rest };
};

export const useFetchSkills = () => {
  let { data, ...rest } = useFetchData("GET", dataUrl);
  return { data: data?.skills ?? [], ...rest };
};
