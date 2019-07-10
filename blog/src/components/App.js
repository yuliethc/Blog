import React, { Component } from 'react';

class App extends Component {
  putRows = () => [
    <tr>
      <td>
        Yulieth
    </td>
      <td>
        yuliethdotcom@gmail.com
    </td>
      <td>
        yulieth.com
    </td>
    </tr>, 
    <tr>
    <td>
      Marco
    </td>
    <td>
      Marco@gmail.com
    </td>
    <td>
      marco.com
    </td>
  </tr>
  ];

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
