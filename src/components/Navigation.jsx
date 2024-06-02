// import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import series from "../assets/icon-nav-tv-series.svg";
import bookedmarks from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";
import styled from "styled-components";
import { defaultTheme } from "./defaultTheme";

function Navigation() {
  return (
    <Container>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <Navbar>
          {" "}
          <img src={home} alt="" />
          <img src={movies} alt="" />
          <img src={series} alt="" />
          <img src={bookedmarks} alt="" />
        </Navbar>
      </div>

      <Avatar src={avatar} alt="" />
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 97vh;
  padding: 25px;
  border-radius: 20px;
  margin: 15px 0;

  background-color: ${defaultTheme.colors.blue};
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-left: 5px;
  width: 27px;
  gap: 30px;
`;
const Avatar = styled.img`
  width: 50px;
`;
