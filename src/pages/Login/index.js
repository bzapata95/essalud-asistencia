import React, { useState } from "react";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

import { Container, Card, Form } from "./styles";

import logo from "../../logo.png";
import { Redirect } from "react-router-dom";

function Login({ signIn, authError, auth, history }) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleInputs = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    signIn(data);

    if (auth.uid) history.push("/dashboard");
  };

  if (auth.uid) return <Redirect to="/dashboard" />;

  return (
    <Container>
      <Card>
        <img src={logo} alt="Logo" style={{ marginBottom: 15, width: 150 }} />
        <small
          style={{
            color: "#ccc",
            fontSize: 15,
            marginBottom: 10,
            textAlign: "center"
          }}
        >
          Sistema de control de personal panel administrativo
        </small>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su correo electrónico"
            name="email"
            value={data.email}
            onChange={handleInputs}
          />
          <input
            type="password"
            placeholder="Ingrese su constraseña"
            name="password"
            value={data.password}
            onChange={handleInputs}
          />
          <button type="submit">Ingresar como administrador</button>
          {authError ? (
            <small style={{ textAlign: "center", color: "red", marginTop: 5 }}>
              {authError}
            </small>
          ) : null}
        </Form>
        <small style={{ color: "#ccc", marginTop: 10, fontSize: 9 }}>
          Si no tienes cuenta consulte con su administrador por favor
        </small>
      </Card>
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
