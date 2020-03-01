import React from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Container, HeaderContainer, Table } from "./styles";

import Header from "../../components/Header";

function Personal({ personales, auth }) {
  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h3>Listado de personal registrado</h3>
          <button>
            <Link to="/admin/personal/crear">Agregar nuevo personal</Link>
          </button>
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
            </tr>
          </thead>
          <tbody>
            {personales ? (
              personales.map(personal => (
                <tr key={personal.id}>
                  <td>
                    <Link to={`/admin/personal/${personal.id}`}>
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "personal", orderBy: ["createdAt", "desc"] }])
)(Personal);
