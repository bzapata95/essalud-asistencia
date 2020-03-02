import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const SafeArea = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    margin-right: 10px;
    color: #aaa;
    font-size: 14px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #0284c6;
    }

    &.active {
      color: #0284c6;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Auth = styled.div`
  font-size: 14px;
  line-height: 13px;
  text-align: right;
  p {
    font-weight: bold;
  }
  small {
    font-size: 11px;
    color: #aaa;
  }
`;
