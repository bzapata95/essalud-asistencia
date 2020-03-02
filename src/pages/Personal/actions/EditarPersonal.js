import React, { createRef } from "react";
import { Link, Redirect } from "react-router-dom";

import { updatePersonal } from "../../../store/actions/personalActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Container, HeaderContainer, Form } from "../styles";

import Header from "../../../components/Header";
import { toast } from "react-toastify";

function EditarPersonal({ updatePersonal, auth, personal, id }) {
  const dni = createRef("");
  const nombres = createRef("");
  const fechNacimiento = createRef("");
  const celular = createRef("");
  const cargo = createRef("");

  const handleSubmit = e => {
    e.preventDefault();

    const personalActualizado = {
      dni: dni.current.value,
      nombres: nombres.current.value,
      fechNacimiento: fechNacimiento.current.value,
      celular: celular.current.value,
      cargo: cargo.current.value,
      id
    };
    updatePersonal(personalActualizado);
    toast.success("🙍‍♂️ Personal actualizado con éxito");
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
        {personal ? (
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese número de dni"
              maxLength="8"
              name="dni"
              defaultValue={personal.dni}
              ref={dni}
            />
            <input
              type="text"
              placeholder="Ingrese nombre completo"
              name="nombres"
              defaultValue={personal.nombres}
              ref={nombres}
            />
            <label htmlFor="date">Fecha de nacimiento</label>
            <input
              type="date"
              id="date"
              name="fechNacimiento"
              defaultValue={personal.fechNacimiento}
              ref={fechNacimiento}
            />
            <input
              type="text"
              placeholder="Ingrese su número celular"
              maxLength="9"
              name="celular"
              defaultValue={personal.celular}
              ref={celular}
            />
            <input
              type="text"
              placeholder="Ingrese el cargo de ocupa"
              name="cargo"
              defaultValue={personal.cargo}
              ref={cargo}
            />
            <button type="submit">Editar datos del este personal</button>
          </Form>
        ) : (
          <p>Cargando datos...</p>
        )}
      </Container>
    </>
  );
}
const mapStateToPorps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const personales = state.firestore.data.personal;
  const personal = personales ? personales[id] : null;
  return {
    auth: state.firebase.auth,
    personal: personal,
    id: id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePersonal: personal => dispatch(updatePersonal(personal))
  };
};

export default compose(
  connect(mapStateToPorps, mapDispatchToProps),
  firestoreConnect([{ collection: "personal" }])
)(EditarPersonal);
