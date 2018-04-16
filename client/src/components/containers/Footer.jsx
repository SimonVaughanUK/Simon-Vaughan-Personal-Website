import React from "react";
import ReactMarkdown from "react-markdown";
import { combineWrappers, withClassName, withMarkdownSource } from "utils";
import FooterContent from "assets/FooterContent.md";

import "./Footer.css";

const Footer = ({ setRef, markdownSource, ...props }) => (
  <footer ref={setRef} {...props}>
    <div className="main-col">
      <ReactMarkdown source={markdownSource} />
    </div>
  </footer>
);

export default combineWrappers(
  withClassName("Footer"),
  withMarkdownSource(FooterContent)
)(Footer);
