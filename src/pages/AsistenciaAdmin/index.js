import React from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Container, HeaderContainer, Table, SearchInput } from "./styles";

import Header from "../../components/Header";

function searchingFor(term) {
  return function(x) {
    return x.dni.includes(term) || !term;
  };
}

function AsistenciaAdmin({ asistencias, auth }) {
  const [data, setData] = React.useState([]);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    setData(asistencias);
  }, [asistencias]);

  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h1>Listado de asistencias del personal</h1>
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
              <th>DNI</th>
              <th>Nombre del personal</th>
              <th>Tipo de control</th>
              <th>Hora registrada</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.filter(searchingFor(term)).map(asistencia => (
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
