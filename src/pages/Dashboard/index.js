import React from "react";

import { connect } from "react-redux";

import { Container } from "./styles";

import Header from "../../components/Header";
import Options from "../../components/Options";

import justify from "../../assets/justify.json";
import config from "../../assets/config.json";
import person from "../../assets/person.json";
import finger from "../../assets/finger.json";
import { Redirect } from "react-router-dom";

function Dashboard({ auth }) {
  if (!auth.uid) return <Redirect to="/admin" />;

  return (
    <>
      <Header />
      <Container>
        <h2>Sistema de control de asistencia</h2>
        <div>
          <Options
            title="Explorador de personal"
            img={person}
            link="/admin/personal"
          />
          <Options
            title="Explorador de asistencia"
            img={finger}
            link="/admin/asistencia"
          />
          <Options
            title="Justificaciones"
            img={justify}
            link="/admin/justificaciones"
          />
          <Options
            title="Configuración"
            img={config}
            link="/admin/configuracion"
          />
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
