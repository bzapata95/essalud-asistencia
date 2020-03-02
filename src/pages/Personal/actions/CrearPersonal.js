import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { createPersonal } from "../../../store/actions/personalActions";
import { connect } from "react-redux";

import { Container, HeaderContainer, Form } from "../styles";

import Header from "../../../components/Header";

function CrearPersonal({ createPersonal, auth, history }) {
  const initState = {
    dni: "",
    nombres: "",
    fechNacimiento: "",
    celular: "",
    cargo: "",
    estado: true
  };

  const [personal, setPersonal] = useState(initState);

  const handleInputs = e => {
    setPersonal({
      ...personal,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createPersonal(personal);
    history.push("/admin/personal");
  };

  if (!auth.uid) return <Redirect to="/admin" />;

  return (
    <>
      <Header />
      <Container>
        <HeaderContainer>
          <h1>Creación de un nuevo personal</h1>
          <Link to="/admin/personal">
            <button>Volver al listado</button>
          </Link>
        </HeaderContainer>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese número de dni"
            maxLength="8"
            name="dni"
            value={personal.dni}
            onChange={handleInputs}
          />
          <input
            type="text"
            placeholder="Ingrese nombre completo"
            name="nombres"
            value={personal.nombres}
            onChange={handleInputs}
          />
          <label htmlFor="date">Fecha de nacimiento</label>
          <input
            type="date"
            id="date"
            name="fechNacimiento"
            value={personal.fechNacimiento}
            onChange={handleInputs}
          />
          <input
            type="text"
            placeholder="Ingrese su número celular"
            maxLength="9"
            name="celular"
            value={personal.celular}
            onChange={handleInputs}
          />
          <input
            type="text"
            placeholder="Ingrese el cargo de ocupa"
            name="cargo"
            value={personal.cargo}
            onChange={handleInputs}
          />
          <button type="submit">Agregar nuevo personal al sistema</button>
        </Form>
      </Container>
    </>
  );
}

const mapStateToPorps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createPersonal: personal => dispatch(createPersonal(personal))
  };
};

export default connect(mapStateToPorps, mapDispatchToProps)(CrearPersonal);
