import * as React from "react";
import * as ReactDOM from "react-dom";

import Content from "./Content";
import Nav from "./Nav";
import Footer from "./Footer";

ReactDOM.render(
  <div>
    <Nav title="水神" />
    <Content />
    <Footer />
  </div>,
  document.getElementById("app"));
