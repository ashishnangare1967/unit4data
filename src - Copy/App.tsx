import React from "react";
import { MainRoutes } from "./Pages/MainRoutes";

export interface prod{
  name:string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id?: number;
}
function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
