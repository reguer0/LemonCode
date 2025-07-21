import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { RMlist } from "./rmlist";

export const App = () => {
   
  return (
    <Router>
      <Routes>     
         <Route path="/" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/RMlist" element={<RMlist />} />
      </Routes>
    </Router>
  );
};
