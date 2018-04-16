import React from "react";
import { combineWrappers, withClassName, withMarkdownSource } from "utils";
import ReactMarkdown from "react-markdown";
import MainContent from "assets/MainContent.md";

import "./Content.css";

const Content = ({ markdownSource, headerHeight, footerHeight, ...props }) => (
  <div
    style={{
      paddingTop: headerHeight,
      minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`
    }}
    {...props}
  >
    <div className="main-col">
      <div />
      <ReactMarkdown source={markdownSource} />
      <div />
    </div>
  </div>
);

export default combineWrappers(
  withClassName("Content"),
  withMarkdownSource(MainContent)
)(Content);
