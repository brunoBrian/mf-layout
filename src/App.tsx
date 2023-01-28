import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Header";
import Card from "./Components/Card";

import "./index.scss";

const App = () => (
  <>
    <Navbar />
    <Footer />
    <Card />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
