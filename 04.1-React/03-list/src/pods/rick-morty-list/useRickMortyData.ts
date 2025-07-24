import React from "react";
// Update the import path if necessary, or create the file if missing
import { MemberEntity } from "../../model/model";

export const useRickMortyData = () => {
  const [filter, setFilter] = React.useState("Rick Sanchez");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  
  // Load full list when the component gets mounted and filter gets updated
  const loadUsers = () =>
 fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
      .then((response) => response.json())
      .then((json) => setMembers(json.results));

  return { members, loadUsers, filter, setFilter };
};
   