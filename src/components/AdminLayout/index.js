import React, { Component } from "react";
import Footer from "../Footer";
import TopBar from "./TopBar";

class AdminLayout extends Component {
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

export default AdminLayout;
