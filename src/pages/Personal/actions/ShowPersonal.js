import React from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Header from "../../../components/Header";

import { Container, HeaderContainer, Form } from "../styles";

function ShowPersonal({ personal, match, auth }) {
  if (!auth.uid) return <Redirect to="/admin" />;
  return (
    <>
      <Header />
      {personal ? (
        <Container>
          <HeaderContainer>
            <h3>Datos de {personal.nombres}</h3>
            <button>
              <Link to={`/admin/personal/editar/${match.params.id}`}>
                Editar datos del personal
              </Link>
            </button>
          </HeaderContainer>
          <p style={{ marginTop: 20 }}>
            <strong>DNI: </strong>
            {personal.dni}
          </p>
          <p>
            <strong>Nombre completo: </strong>
            {personal.nombres}
          </p>
          <p>
            <strong>Fecha de nacimiento: </strong>
            {personal.fechNacimiento}
          </p>
          <p>
            <strong>Número de celular: </strong>
            {personal.celular}
          </p>
          <p>
            <strong>Cargo actual: </strong>
            {personal.cargo}
          </p>
          <p>
            <strong>Estado: </strong>
            {personal.estado ? "ACTIVO" : "INACTIVO"}
          </p>
        </Container>
      ) : (
        <Container>
          <p>Cargando...</p>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const personales = state.firestore.data.personal;
  const personal = personales ? personales[id] : null;
  return {
    personal: personal,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "personal" }])
)(ShowPersonal);
