import React, { Component } from "react";
import { withClassName } from "utils";
import Header from "components/containers/Header";
import Content from "components/containers/Content";
import Footer from "components/containers/Footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
      footerHeight: 0
    };
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }
  onResize = () => {
    if (!this.headerRef || !this.footerRef) {
      return;
    }
    this.setState({
      headerHeight: this.headerRef.clientHeight,
      footerRef: this.footerRef.clientHeight
    });
  };
  render() {
    const { ...props } = this.props;
    const { headerHeight, footerHeight } = this.state;

    return (
      <div {...props}>
        <Header setRef={ref => (this.headerRef = ref)} />
        <Content headerHeight={headerHeight} footerHeight={footerHeight} />
        <Footer setRef={ref => (this.footerRef = ref)} />
      </div>
    );
  }
}

export default withClassName("App")(App);
