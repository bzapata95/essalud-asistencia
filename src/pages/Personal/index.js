import React from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { updateEstado } from "../../store/actions/personalActions";

import { Container, HeaderContainer, Table } from "./styles";

import Header from "../../components/Header";

function Personal({ personales, auth, updateEstado }) {
  const [data, setData] = React.useState([]);
  const handleStatus = (id, estado) => {
    updateEstado(id, estado);
  };

  React.useEffect(() => {
    setData(personales);
  }, [personales]);
  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h1>Listado del personal registrado</h1>
          <Link to="/admin/personal/crear">
            <button>Agregar nuevo personal</button>
          </Link>
        </HeaderContainer>
        <Table>
          <thead>
            <tr>
              <th>Nro. dni</th>
              <th>Nombres</th>
              <th>Fecha nacimiento</th>
              <th>Celular</th>
              <th>Cargo</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map(personal => (
                <tr key={personal.id}>
                  <td>
                    <Link to={`/admin/personal/editar/${personal.id}`}>
                      {personal.dni}
                    </Link>
                  </td>
                  <td>{personal.nombres}</td>
                  <td>{personal.fechNacimiento}</td>
                  <td>{personal.celular}</td>
                  <td>{personal.cargo}</td>
                  <td>
                    <span className={personal.estado ? "active" : "unactive"}>
                      {personal.estado ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td style={{ lineHeight: 2 }}>
                    <Link
                      className="options"
                      to={`/admin/justificacion/crear/${personal.id}`}
                    >
                      Crear justificación
                    </Link>
                    <button
                      onClick={() => handleStatus(personal.id, personal.estado)}
                    >
                      Cambiar estado
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Cargando...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    personales: state.firestore.ordered.personal,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateEstado: (id, estado) => dispatch(updateEstado(id, estado))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "personal",
      orderBy: ["createdAt", "desc"]
    }
  ])
)(Personal);
