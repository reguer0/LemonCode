import React from "react";
import { Link } from "react-router-dom";
import { useUserCollection } from "./useUserCollection";

export const ListPage: React.FC = () => {
  const { members, loadUsers, filter, setFilter } = useUserCollection();
  const [inputValue, setInputValue] = React.useState(filter);

  React.useEffect(() => {
    loadUsers();
  }, [filter]);

  return (
    <>
      <h2>Hello from List page</h2>{" "}
      <input type="text" placeholder="Filter by organization"  value={inputValue}
        onChange={(event) => setInputValue( event.target.value)}
      />
      <button onClick={() => setFilter(inputValue)}>Filter</button>
     
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        { members?.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        )) }
      </div>      
     <Link to="/RMlist">Navigate to RM list page</Link>

    </>
  );
};
