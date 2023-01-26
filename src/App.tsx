import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header";

import "./index.scss";

const App = () => (
  <>
    <Navbar fixed />
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
