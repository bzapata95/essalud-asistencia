import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
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
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
  height: 80%;

  a {
    text-decoration: none;
    text-align: center;
  }
`;
