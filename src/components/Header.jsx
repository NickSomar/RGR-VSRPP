import React from "react";
import { FadeMenu } from "./fadeMenu/FadeMenu";
import header from "./Header.module.css";
import { Nav } from "./navigation/Nav";
import { SignUp } from "./signUpBtn/SignUpBtn";
import { useSelector } from "react-redux";
import { userSelector } from "../store/userSelector";

function Header() {
  const state = useSelector(userSelector);

  return (
    <div className={header.header}>
      <div className={header.container}>
        <FadeMenu />
        <Nav />
        <SignUp />
      </div>
    </div>
  );
}

export default Header;
