import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { UserList } from "./scenes/list/userList";
import {RickMortyList } from "./scenes/rick-morty/rickMortyList";
import {Details } from "./scenes/details/details";
import {RMDetails } from "./scenes/details/rmDetails";

// ...


export const App = () => {
   
  return (
    <Router>
      <Routes>     
        <Route path="/" element={<UserList />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/RMlist" element={<RickMortyList />} />
        <Route path="/RMdetail/:id" element={<RMDetails />} />
      </Routes>
    </Router>
  );
};
