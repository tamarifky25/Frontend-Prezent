import React, { Component } from "react";
import Footer from "../Footer";
import TopBar from "./TopBar"

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <TopBar />
          <div className="main-content">
            <div className="page-content">{this.props.children}</div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
