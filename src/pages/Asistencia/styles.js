import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
  width: 700px;
  height: auto;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px 24px;
  border-radius: 10px;

  box-shadow: 2px 2px 10px #ccc;
`;

export const Title = styled.p`
  font-size: 22px;
  margin: 10px 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0;

  input {
    padding: 5px 12px;
    border: 1px solid #e6e6e6;
    font: 14px;
    border-radius: 5px 0 0 5px;
  }
  button {
    padding: 5px 12px;
    border-radius: 0 5px 5px 0;
    border: 1px solid #0083c6;
    background-color: #0083c6;
    font-size: 14px;
    color: #fff;
    cursor: pointer;

    &:disabled {
      background-color: #e6e6e6;
      border: 1px solid #e6e6e6;
    }
  }
`;

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 15px;
  border: 1px solid #0083c6;
  background-color: #0083c6;
  border-radius: 5px;
  color: #fff;
  margin: 15px 0;
  cursor: pointer;
`;
