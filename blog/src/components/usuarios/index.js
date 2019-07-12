import React, { Component } from "react";
import axios from "axios";

class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: []
    };
  }
  async componentDidMount() {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({
      usuarios: respuesta.data
    });
  }
  putRows = () =>
    this.state.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.website}</td>
        <td>{usuario.email}</td>
      </tr>
    ));

  render() {
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>name</th>
              <th>website</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>{this.putRows()}</tbody>
        </table>
      </div>
    );
  }
}
export default Usuarios;
