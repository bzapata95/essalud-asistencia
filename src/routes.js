import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";

import Asistencia from "./pages/Asistencia";
import Login from "./pages/Login";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   <Route
//     {...rest}
//     render={props => {
//       isAuthenticated() ? (
//         <>
//           {" "}
//           <Header />
//           <Component {...props} />{" "}
//         </>
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       );
//     }}
//   />;
// };

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Asistencia} />
        <Route exact path="/admin" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
