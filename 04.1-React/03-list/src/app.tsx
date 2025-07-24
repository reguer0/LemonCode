import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { UserList } from "./scenes/list/userList";
import {RickMortyList } from "./scenes/rick-morty/rickMortyList";
import {Details } from "./scenes/details/details";

// ...


export const App = () => {
   
  return (
    <Router>
      <Routes>     
        <Route path="/" element={<UserList />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/RMlist" element={<RickMortyList />} />
      </Routes>
    </Router>
  );
};
