import React from "react";
import { Link } from "react-router-dom";
import { useRickMortyData } from "./useRickMortyData";

import { Button ,TextField ,Avatar } from "@mui/material";

export const RMlist = () => {
  const {
    members,
    filter,
    setFilter,
    page,
    setPage,
    totalPages,
    loading,
  } = useRickMortyData();
  
  const [inputValue, setInputValue] = React.useState(filter);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <>
      <TextField
        type="text"
        placeholder="Buscar personaje"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button
        onClick={() => {
          setFilter(inputValue);
          setPage(1); // Reiniciar a la primera página cuando se aplica nuevo filtro
        }}
      >
        Filtrar
      </Button>

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {loading ? (
          <span>Cargando...</span>
        ) : members && members.length > 0 ? (
          members.map((member) => (
            <React.Fragment key={member.id}>
              <Avatar src={member.image} alt={member.name} />
              <span>{member.id}</span>
              <Link to={`/RMdetail/${member.name}`}>{member.name}</Link>
            </React.Fragment>
          ))
        ) : (
          <span>No se encontraron personajes</span>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Anterior
        </button>
        <span style={{ margin: "0 10px" }}>
          Página {page} de {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Siguiente
        </button>
      </div>

      <br />
      <Link to="/">Back to List page</Link>
    </>
  );
};
