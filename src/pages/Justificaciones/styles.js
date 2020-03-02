import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: #222;
  }
  a {
    display: inline-block;
  }

  button {
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    background-color: #0284c6;
    color: #fff;
    cursor: pointer;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 25px;
  color: #222;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  border-collapse: separate;
  border-spacing: 0px 10px;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      color: #222;
      text-align: left;
      font-weight: normal;
      margin-bottom: 12px;
      th {
        padding-left: 12px;
        padding-bottom: 16px;
      }
    }
  }

  tbody {
    tr {
      cursor: pointer;
      background-color: #fff;
      border-radius: inherit;
      transition: all 0.2s ease 0s;
      :hover {
        background: #e6e6e6;
      }
      td {
        border: none;
        padding: 12px 12px;
        :first-child {
          border-radius: 5px 0 0 5px;
        }
        :last-child {
          border-radius: 0px 5px 5px 0;
        }
        span.unactive {
          font-size: 9px;
          font-weight: bold;
          background-color: #fc4850;
          padding: 3px 5px;
          border-radius: 5px;
        }
        span.active {
          font-size: 9px;
          font-weight: bold;
          color: #0e0e10;
          background-color: #90c418;
          padding: 3px 5px;
          border-radius: 5px;
        }
        a {
          padding: 0;
          margin: 0;
        }
      }
      td.acctions {
        button {
          margin-right: 10px;
          background-color: transparent;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          padding: 5px 8px;
          outline: none;
          color: #efeff1;
          font-weight: bold;
          :hover {
            background-color: #0e0e10;
          }
        }
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;

  label {
    font-size: 12px;
  }

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
    cursor: pointer;
  }
`;
