import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export const RMDetailPage: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
 

  return (
    <>
      <h2>Hello from Rick and Morty Detail page</h2>
      <h3>User Id: {id}</h3>
          <Link to="/RMlist">Navigate to RM list page</Link>
    </>
  );
};
