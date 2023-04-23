import React from "react";

import "./App.css";
import MainRoutes from "./pages/MainRoutes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

 


  return (
    <div className="App">
      {/* <Home/> */}
      <Navbar/>
      <MainRoutes/>
      
    </div>
  );
}

export default App;
