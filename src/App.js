import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import {Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reservations' element={<Reservations />}/>
        <Route path='*' element={ <Navigate to='/' /> } />
      </Routes>
    </>
  );
}

export default App;
