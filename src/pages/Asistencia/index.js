import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import loading from "../../assets/loading.json";
import { toast } from "react-toastify";

import { connect } from "react-redux";
import { searchPersonal, resetSearch } from "../../store/actions/searchActions";
import { createAsistencia } from "../../store/actions/asistenciaActions";

import Clock from "react-clock";
import "react-clock/dist/Clock.css";

import logo from "../../logo.png";
import {
  Container,
  Card,
  Title,
  Form,
  PersonalContainer,
  Button
} from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function Asistencia({
  searchPersonal,
  personal,
  searchError,
  loading,
  createAsistencia,
  resetSearch
}) {
  const [date, setDate] = useState(new Date());
  const [dni, setDni] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    searchPersonal(dni);
  };

  const actionEntrada = (id, nombres, dni) => {
    const personal = {
      tipo: "entrada",
      nombres,
      idPer: id,
      hora: date,
      dni
    };
    createAsistencia(personal);
    setDni("");
    resetSearch();
    toast.success(` 🙌 Marcaste tu hora de entrada con éxito!`);
  };
  const actionSalida = (id, nombres, dni) => {
    const personal = {
      tipo: "salida",
      nombres,
      idPer: id,
      hora: date,
      dni
    };
    createAsistencia(personal);
    setDni("");
    resetSearch();
    toast.success(` 👋 Marcaste tu hora de saluda con éxito!`);
  };

  return (
    <Container>
      <Card>
        <Clock value={date} />
        <img src={logo} alt="Logo" style={{ marginTop: 15, width: 150 }} />
        <Title>Asistencia de personal</Title>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su dni"
            name="dni"
            value={dni}
            onChange={e => setDni(e.target.value)}
            maxLength="8"
            autoComplete="off"
          />
          <button disabled={dni.length > 7 ? "" : "disabled"}>
            Buscar personal
          </button>
        </Form>
        {personal && (
          <PersonalContainer>
            <h2>{personal.data.nombres}</h2>
            <div
              style={{
                width: "100%",
                maxWidth: 280,
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Button
                onClick={() =>
                  actionEntrada(
                    personal.id,
                    personal.data.nombres,
                    personal.data.dni
                  )
                }
              >
                Marcar entrada
              </Button>
              <Button
                onClick={() =>
                  actionSalida(
                    personal.id,
                    personal.data.nombres,
                    personal.data.dni
                  )
                }
              >
                Marcar salida
              </Button>
            </div>
          </PersonalContainer>
        )}
        {loading && (
          <Lottie
            options={defaultOptions}
            width={100}
            height={100}
            isStopped={false}
            isPaused={false}
          />
        )}

        {searchError && <small style={{ color: "red" }}>{searchError}</small>}
      </Card>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    personal: state.search.personal,
    searchError: state.search.searchError,
    loading: state.search.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPersonal: dni => dispatch(searchPersonal(dni)),
    createAsistencia: personal => dispatch(createAsistencia(personal)),
    resetSearch: () => dispatch(resetSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Asistencia);
