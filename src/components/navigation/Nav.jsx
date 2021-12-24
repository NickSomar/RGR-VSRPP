import React from "react";
import { Link } from "react-router-dom";
import nav from "./Nav.module.css";

export function Nav() {
  return (
    <div className={nav.container__nav}>
      <ul>
        <li>
          <Link to="/link1">Link 1</Link>
        </li>
        <li>
          <Link to="/link2">Link 2</Link>
        </li>
        <li>
          <Link to="/link3">Link 3</Link>
        </li>
      </ul>
    </div>
  );
}
