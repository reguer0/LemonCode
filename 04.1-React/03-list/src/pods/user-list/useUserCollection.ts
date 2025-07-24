import React from "react";
import {MemberEntity} from "../../model/model";



export const useUserCollection = () => {
  const [filter, setFilter] = React.useState("lemoncode");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  
  // Load full list when the component gets mounted and filter gets updated
  const loadUsers = () =>
 fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));

  return { members, loadUsers, filter, setFilter };
};
