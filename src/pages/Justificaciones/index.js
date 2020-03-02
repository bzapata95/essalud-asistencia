import React from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { justificar } from "../../store/actions/personalActions";

import Header from "../../components/Header";
import { Container, HeaderContainer, Table } from "./styles";
const Justificaciones = ({ justificaciones, auth, justificar }) => {
  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h1>Relación de justificaciones</h1>
          {/* <Link to="/admin/justificacion/crear">
            <button>Agregar nueva justificación</button>
          </Link> */}
        </HeaderContainer>
        <Table>
          <thead>
            <tr>
              <th>Nro. dni</th>
              <th>Nombres</th>
              <th>Motivo</th>
              <th>Fecha de emisión</th>
              <th>Fecha de Justificación</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {justificaciones ? (
              justificaciones.map(justificacion => (
                <tr key={justificacion.id}>
                  <td>{justificacion.dni}</td>
                  <td>{justificacion.nombres}</td>
                  <td>{justificacion.motivo}</td>
                  <td>
                    {moment(justificacion.fechEmision.toDate()).calendar()}
                  </td>
                  <td>
                    {justificacion.fechJustificado &&
                      moment(justificacion.fechJustificado.toDate()).calendar()}
                  </td>
                  <td>
                    <span
                      className={justificacion.estado ? "active" : "unactive"}
                    >
                      {justificacion.estado ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td>
                    {justificacion.estado ? (
                      <button
                        onClick={() => justificar(justificacion.id)}
                        style={{ cursor: "pointer" }}
                      >
                        Justificar
                      </button>
                    ) : (
                      "Sin acceso"
                    )}
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
};

const mapStateToProps = state => {
  return {
    justificaciones: state.firestore.ordered.justificaciones,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    justificar: id => dispatch(justificar(id))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "justificaciones",
      orderBy: ["estado", "desc"]
    }
  ])
)(Justificaciones);
