import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 8px 12px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 10px;

    &::placeholder {
      color: #ccc;
    }
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 10px 0;
    color: #fff;
    background-color: #0083c6;
  }
`;
