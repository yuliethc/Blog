import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./menu";
import Usuarios from "./usuarios";
import Tareas from "./usuarios/tareas";

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path='/' component={Usuarios}/>
    <Route exact path='/tareas' component={Tareas}/>
  </BrowserRouter>
);
export default App;
