import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import { Container, SafeArea, Nav, Auth } from "./styles";

import logo from "../../logo.png";

function Header({ signOut, auth }) {
  return (
    <Container>
      <SafeArea>
        <img src={logo} alt="Logo" style={{ width: 50 }} />
        <Nav>
          <NavLink to="/admin/personal" activeClassName="active">
            Personal
          </NavLink>
          <NavLink to="/admin/asistencia" activeClassName="active">
            Asistencia
          </NavLink>
          <NavLink to="/admin/justificaciones" activeClassName="active">
            Justificaciones
          </NavLink>
          <NavLink to="/admin/configuracion" activeClassName="active">
            Configuración
          </NavLink>
        </Nav>
        {auth.uid ? (
          <div style={{ display: "flex" }}>
            <Auth>
              <p>{auth.email}</p>
              <small>Administrador</small>
            </Auth>
            <button
              style={{ border: "none", marginLeft: 10, cursor: "pointer" }}
              onClick={() => signOut()}
            >
              Salir
            </button>
          </div>
        ) : null}
      </SafeArea>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(Header));
