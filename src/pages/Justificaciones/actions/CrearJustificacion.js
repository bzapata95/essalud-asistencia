import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createJustificacion } from "../../../store/actions/personalActions";

import { Container, HeaderContainer, Form } from "../styles";

import Header from "../../../components/Header";
import { toast } from "react-toastify";

const CrearJustificacion = ({
  auth,
  personal,
  id,
  createJustificacion,
  history
}) => {
  const [motivo, setMotivo] = React.useState("");
  if (!auth.uid) return <Redirect to="/admin" />;

  const handleInputs = e => {
    setMotivo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const just = {
      dni: personal.dni,
      estado: true,
      isPer: id,
      motivo,
      nombres: personal.nombres
    };
    createJustificacion(just);
    toast.warn("Justificación registrada con éxito!");
    history.goBack();
  };
  return (
    <>
      <Header />
      {personal ? (
        <Container>
          <HeaderContainer>
            <h1>Creación de justificación para: {personal.nombres}</h1>
          </HeaderContainer>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese el motivo para su justificación"
              name="motivo"
              value={motivo}
              onChange={handleInputs}
              autoComplete="off"
              required
            />
            <button type="submit">Registrar justificación</button>
          </Form>
        </Container>
      ) : null}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const personales = state.firestore.data.personal;
  const personal = personales ? personales[id] : null;
  return {
    personal: personal,
    auth: state.firebase.auth,
    id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createJustificacion: personal => dispatch(createJustificacion(personal))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "personal" }])
)(CrearJustificacion);
