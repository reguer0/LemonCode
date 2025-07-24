import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const org = searchParams.get("org") || "lemoncode";

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to={`/?org=${org}`}>Back to list page</Link>
    </>
  );
};
