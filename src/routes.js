import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";

import Asistencia from "./pages/Asistencia";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Personal from "./pages/Personal";
import ShowPersonal from "./pages/Personal/actions/ShowPersonal";
import CrearPersonal from "./pages/Personal/actions/CrearPersonal";
import EditarPersonal from "./pages/Personal/actions/EditarPersonal";

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
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/admin/personal" component={Personal} />
        <Route exact path="/admin/personal/crear" component={CrearPersonal} />
        <Route
          exact
          path="/admin/personal/editar/:id"
          component={EditarPersonal}
        />
        <Route exact path="/admin/personal/:id" component={ShowPersonal} />
      </Switch>
    </BrowserRouter>
  );
}
