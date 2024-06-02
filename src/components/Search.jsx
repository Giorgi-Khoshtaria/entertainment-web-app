// import React from "react";
import loop from "../assets/icon-search.svg";
import styled from "styled-components";
import { defaultTheme } from "./defaultTheme";

function Search() {
  return (
    <Container>
      <img src={loop} alt="" />

      <input type="text" placeholder=" Search from movies or TV series" />
    </Container>
  );
}

export default Search;

const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 100%;
    flex: 0.98;
    background-color: transparent;
    border: 0;
    outline: 0;
    height: 47px;
    border-bottom: 2px solid ${defaultTheme.colors.blue};
    transition: all 0.3s;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    /* Pure White */
    color: ${defaultTheme.colors.white};
    padding: 30px 0;
    &::placeholder {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 30px;
      /* Pure White */
      color: ${defaultTheme.colors.white};
      mix-blend-mode: normal;
      opacity: 0.5;
    }
    &:focus {
      border-bottom: 2px solid ${defaultTheme.colors.lightblue};
    }
  }
`;
