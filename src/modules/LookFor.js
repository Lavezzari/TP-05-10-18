import React, { Component } from 'react';
import { Table } from 'react-materialize';


class LookFor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      searchText: "",
    };
  }

  componentDidMount() {
    const url = "https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones";
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(json => this.setState({ usuarios: json }))
      .catch();
  }

  inputOnChange(texto) {
    this.setState({
      searchText: texto,
    })
  }

  searchedItems() {
    try {
      const { usuarios, searchText } = this.state;

      const searchTextMinuscula = searchText.toLocaleLowerCase();

      if (searchText === "") {
        return usuarios;
      }

      const found = usuarios.filter((user) => {
        const busqueTipo = user.tipo.toLocaleLowerCase().indexOf(searchTextMinuscula) !== -1;
        const busqueName = user.nombre.toLocaleLowerCase().indexOf(searchTextMinuscula) !== -1;
        const busquePais = user.pais.toLocaleLowerCase().indexOf(searchTextMinuscula) !== -1;
        const busqueEmail = user.email.toLocaleLowerCase().indexOf(searchTextMinuscula) !== -1;
        return busqueName || busquePais || busqueEmail || busqueTipo;
      });

      return found;
    } catch (err) {

    }
  }

  render() {

    const { usuarios, searchText } = this.state;
    console.log(usuarios);

    return (
      <div className="LookFor">
          <h3>Usuarios</h3>
          <div className="input-group mb-3 input">
		<div className="lookFor">
            <input type="text" className="Found" placeholder="Busqueda" aria-label="Search" aria-describedby="button-addon2" onChange={event => this.inputOnChange(event.target.value)} />
	</div>
		<div className="input-group-append">
              <button className="btn blue" type="button" id="button-addon2">Buscar</button>
            </div>
          </div>

          <div className="loBuscado">
            {searchText.length > 0 &&
              <p>Usuarios Encontrados: {this.searchedItems().length}</p>
            }

            <Table>
              <thead>
                <tr>
                  <th data-field="type">Tipo</th>
                  <th data-field="nombre">Nombre</th>
                  <th data-field="email">Email</th>
                  <th data-field="country">Pais</th>
                </tr>
              </thead>

              {this.searchedItems().map(user =>
                <tbody>
                  <tr>
                    <td>{user.tipo}</td>
                    <td>{user.nombre}</td>
                    <td>{user.email}</td>
                    <td>{user.pais}</td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
        </div>
    );
  }
}

export default LookFor;
