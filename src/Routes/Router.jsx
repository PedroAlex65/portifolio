import {  Route, Routes } from "react-router-dom";
import Home from "../Container/Home/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
