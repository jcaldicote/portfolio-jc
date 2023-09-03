import React from "react";
import { useFetchProjects } from "../hooks/useApi.js";
import Card from "../components/Card.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

import "./Projects.scss";

const Projects = () => {
  const { data, loading, error } = useFetchProjects();

  if (loading) return <div>Page is loading ...</div>;
  if (error) return <ErrorPage />;

  return (
    <div>
      <section className="galery-container">
        {data.map((item) => (
          <Card key={item.id} itemsData={item} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
