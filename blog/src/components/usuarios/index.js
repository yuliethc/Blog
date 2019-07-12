import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
class Usuarios extends Component {

  // async componentDidMount() {
  //   const respuesta = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   this.setState({
  //     usuarios: respuesta.data
  //   });
  // }
  putRows = () =>
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.website}</td>
        <td>{usuario.email}</td>
      </tr>
    ));

  render() {
    console.log(this.props)
    return (
      <div>
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
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}
export default connect(mapStateToProps,{/* actions */})(Usuarios);
