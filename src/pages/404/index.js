import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import notfound from "../../assets/notfound.svg";
const NotFound = () => {
  return (
    <Container>
      <img src={notfound} alt="not found svg" width="300" />
      <h3 style={{ color: "#222", marginTop: 20 }}>Página no encontrada</h3>
      <Link
        to="/"
        style={{ marginTop: 10, textDecoration: "none", color: "#0284C6" }}
      >
        Ir a la página principal
      </Link>
    </Container>
  );
};

export default NotFound;
