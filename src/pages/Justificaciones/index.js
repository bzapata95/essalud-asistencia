import React from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import {
  justificar,
  deleteJustificacion
} from "../../store/actions/personalActions";

import Header from "../../components/Header";
import { Container, HeaderContainer, Table, SearchInput } from "./styles";

function searchingTerm(term) {
  return function(x) {
    return x.dni.includes(term) || !term;
  };
}

const Justificaciones = ({
  justificaciones,
  auth,
  justificar,
  deleteJustificacion
}) => {
  const [data, setData] = React.useState([]);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    setData(justificaciones);
    console.log("actualizado");
  }, [justificaciones]);

  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h1>Relación de justificaciones</h1>
        </HeaderContainer>
        {data && (
          <SearchInput
            placeholder="Busqueda por dni"
            name="term"
            onChange={e => setTerm(e.target.value)}
            maxLength="8"
          />
        )}
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
            {data ? (
              data.filter(searchingTerm(term)).map(justificacion => (
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
                      <div style={{ lineHeight: 2 }}>
                        <button
                          onClick={() => justificar(justificacion.id)}
                          style={{ cursor: "pointer" }}
                        >
                          Justificar
                        </button>
                        <button
                          onClick={() => deleteJustificacion(justificacion.id)}
                          style={{ cursor: "pointer" }}
                        >
                          Eliminar
                        </button>
                      </div>
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
    justificar: id => dispatch(justificar(id)),
    deleteJustificacion: id => dispatch(deleteJustificacion(id))
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
