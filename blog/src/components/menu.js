import React from "react";
import {Link} from "react-router-dom";
const menu = () => {
  return (
    <nav id="menu">
      <Link to="/">Usuarios</Link>
      <Link to="/tareas">Tareas</Link>
    </nav>
  );
};
export default menu;
