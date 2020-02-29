import React, { useState, useEffect } from "react";
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

export default function Asistencia() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <Container>
      <Card>
        <Clock value={date} />
        <img src={logo} alt="Logo" style={{ marginTop: 15, width: 150 }} />
        <Title>Asistencia de personal</Title>
        <Form>
          <input type="number" placeholder="Ingrese su dni" />
          <button disabled>Buscar personal</button>
        </Form>
        <PersonalContainer>
          <h2>Jorge Luis Zapata Anco</h2>
          <Button>Marcar entrada</Button>
          <Button>Marcar salida</Button>
        </PersonalContainer>
      </Card>
    </Container>
  );
}
