import React from 'react';

const App = () => {
  const putRows = () => [
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
          {putRows()}
      </tbody>
      </table>
      </div>
  );
}

export default App;
