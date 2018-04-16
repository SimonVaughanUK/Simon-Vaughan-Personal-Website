import React, { Component } from "react";

let markdownSource = null;

const withMarkdownSource = markdownSourcePath => component =>
  class Content extends Component {
    constructor(props) {
      super(props);

      this.state = {
        markdownSource
      };
    }
    componentDidMount() {
      if (!markdownSource) {
        fetch(markdownSourcePath)
          .then(response => response.text())
          .then(text => {
            markdownSource = text;
            this.setState({ markdownSource });
          });
      }
    }
    render() {
      const { markdownSource } = this.state;

      return React.createElement(component, { markdownSource, ...this.props });
    }
  };

export default withMarkdownSource;
