import React from "react";
import { MemberEntity } from "../../model/model";

export const useRickMortyData = () => {
  const [filter, setFilter] = React.useState("Rick Sanchez");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const loadUsers = () => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${filter}&page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setMembers(json.results || []);
        setTotalPages(json.info?.pages || 1);
      })
      .catch(() => {
        setMembers([]);
        setTotalPages(1);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Re-fetch when filter or page changes
  React.useEffect(() => {
    loadUsers();
  }, [filter, page]);

  return {
    members,
    filter,
    setFilter,
    page,
    setPage,
    totalPages,
    loading,
  };
};
