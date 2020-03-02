import React from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Container, HeaderContainer, Table } from "./styles";

import Header from "../../components/Header";

function AsistenciaAdmin({ asistencias, auth }) {
  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h1>Listado de asistencias del personal</h1>
          {/* <Link to="/admin/personal/crear">
            <button>Agregar nuevo personal</button>
          </Link> */}
        </HeaderContainer>
        <Table>
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre del personal</th>
              <th>Tipo de control</th>
              <th>Hora registrada</th>
            </tr>
          </thead>
          <tbody>
            {asistencias ? (
              asistencias.map(asistencia => (
                <tr key={asistencia.id}>
                  <td>{asistencia.dni}</td>
                  <td>{asistencia.nombres}</td>
                  <td>{asistencia.tipo}</td>
                  <td>{moment(asistencia.hora.toDate()).calendar()}</td>
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
    asistencias: state.firestore.ordered.asistencias,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "asistencias",
      orderBy: ["hora", "desc"]
    }
  ])
)(AsistenciaAdmin);
