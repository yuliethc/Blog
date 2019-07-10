import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          nombre: 'Yulieth',
          correo: 'yuliethdotcom@gmail.com',
          enlace: 'yulieth.com'
        },
        {
          nombre: 'Marco',
          correo: 'marco@gmail.com',
          enlace: 'marco.com'
        }
      ]
    }
}

  putRows = () => (
    this.state.usuarios.map((usuario) => (
      <tr>
        <td>
          {usuario.nombre}
        </td>        
        <td>
          {usuario.correo}
        </td>        
        <td>
          {usuario.enlace}
        </td>
  </tr>
))
  );

  render(){
    return (
      <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thead>
        <tbody>
            {this.putRows()}
        </tbody>
        </table>
        </div>
    );
}
}
export default App;
