import React from "react";
import { withClassName } from "utils";

import "./Header.css";

const Header = ({ setRef, ...props }) => (
  <header ref={setRef} {...props}>
    <div className="main-col">
      <span>Header goes here</span>
    </div>
  </header>
);

export default withClassName("Header")(Header);
