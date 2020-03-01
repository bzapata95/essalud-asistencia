import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    text-align: center;
    margin-bottom: 50px;
    color: #222;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  height: 80%;

  a {
    text-decoration: none;
    text-align: center;
  }
`;
