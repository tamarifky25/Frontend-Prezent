import React from "react";
import { Route } from "react-router-dom";

import Layout from "../components/Layout";
import NonAuthLayout from "../components/NonAuthLayout";
import AdminLayout from "../components/AdminLayout";

const AppRoute = ({ component: Component, isAuthProtected, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const fireBaseBackend = true;

      // check account type, you can set it from db after user login
      const isAdmin = localStorage.getItem("status");

      if (isAuthProtected && isAdmin === "user" && fireBaseBackend === true) {
        console.log("user");
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      } else if (isAuthProtected && isAdmin === "admin" && fireBaseBackend === true) {
        console.log("admin");
        return (
          <AdminLayout>
            <Component {...props} />
          </AdminLayout>
        );
      }

      return (
        <NonAuthLayout>
          <Component {...props} />
        </NonAuthLayout>
      );
    }}
  />
);

export default AppRoute;
