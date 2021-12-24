import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { SignUpPage } from "./pages/signUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
