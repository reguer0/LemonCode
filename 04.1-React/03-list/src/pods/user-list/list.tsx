import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useUserCollection } from "./useUserCollection";
import { Button ,TextField ,Avatar } from "@mui/material";

export const ListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orgParam = searchParams.get("org") || "lemoncode";
  const { members, loadUsers, filter, setFilter } = useUserCollection();
  const [inputValue, setInputValue] = useState(orgParam);

  // Solo actualiza el filtro cuando cambia el parámetro de la URL
  useEffect(() => {
    setFilter(orgParam);
  }, [orgParam, setFilter]);

  // Carga los usuarios cuando cambia el filtro
  useEffect(() => {
    loadUsers();
  }, [filter, loadUsers]);

  // Actualiza el input solo cuando cambia el parámetro de la URL
  useEffect(() => {
    setInputValue(orgParam);
  }, [orgParam]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const handleFilter = useCallback(() => {
    setSearchParams({ org: inputValue });
    // setFilter se ejecuta en el useEffect por el cambio de orgParam
  }, [inputValue, setSearchParams]);

  return (
    <>
      <h2>Hello from List page</h2>
      <TextField
        type="text"
        placeholder="Filter by organization"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleFilter}>Buscar</Button>

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members?.map((member) => (
          <React.Fragment key={member.id}>
            <Avatar src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}?org=${orgParam}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/RMlist">Navigate to RM list page</Link>
    </>
  );
};
