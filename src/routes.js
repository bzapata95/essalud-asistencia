import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Asistencia from "./pages/Asistencia";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Personal from "./pages/Personal";
import ShowPersonal from "./pages/Personal/actions/ShowPersonal";
import CrearPersonal from "./pages/Personal/actions/CrearPersonal";
import EditarPersonal from "./pages/Personal/actions/EditarPersonal";

import AsistenciaAdmin from "./pages/AsistenciaAdmin";

export default function Routes() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
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
        <Route exact path="/admin/asistencia" component={AsistenciaAdmin} />
      </Switch>
    </BrowserRouter>
  );
}
