import Home from "./Home";
import { Routes, Route } from 'react-router-dom'
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "../pages/Searched";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
        <Route path="/search/:searched" element={<Searched/>}/>
      </Routes>
  );
}

export default Pages;