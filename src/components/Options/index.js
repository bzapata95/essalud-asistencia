import React from "react";
import { NavLink } from "react-router-dom";
import Lottie from "react-lottie";

import { Container } from "./styles";

export default function Options({ title, img, link }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Container>
      <NavLink to={link}>
        <Lottie
          options={defaultOptions}
          width={150}
          height={150}
          isStopped={false}
          isPaused={false}
        />
        <p style={{ color: "#aaa", fontWeight: "bold", marginTop: 10 }}>
          {title}
        </p>
      </NavLink>
    </Container>
  );
}
