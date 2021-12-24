import React from "react";
import sign from "./SignUpBtn.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className={sign.container__signUp}>
      <Link to="/signUp">
        <Button variant="contained" color="success">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
