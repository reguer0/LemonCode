import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRickMorty } from "./useRick&MortyData";

export const RMlist = () => {
   const { members, loadUsers, filter, setFilter } = useRickMorty();
    const [inputValue, setInputValue] = React.useState(filter);
  
    React.useEffect(() => {
      loadUsers();
    }, [filter]);
  return (
    <>
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
              <img src={member.image} />
              <span>{member.id}</span>
              <Link to={`/detail/${member.name}`}>{member.name}</Link>
            </React.Fragment>
          )) }
        </div>      
      <Link to="/">Back to list page</Link>
    </>
  );
}
