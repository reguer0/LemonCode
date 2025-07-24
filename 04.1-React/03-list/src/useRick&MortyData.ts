import React from "react";
import {MemberEntity} from "./model";

export const useRickMorty = () => {
  const [filter, setFilter] = React.useState("Rick Sanchez");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  
  // Load full list when the component gets mounted and filter gets updated
  const loadUsers = () =>
 fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
      .then((response) => response.json())
      .then((json) => setMembers(json.results));

  return { members, loadUsers, filter, setFilter };
};
   