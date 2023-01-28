import React from "react";
import ReactDOM from "react-dom";

import { CardSite, Footer, Navbar } from "./Components";

import "./index.scss";

const App = () => (
  <>
    <Navbar />
    <Footer />
    <CardSite />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
