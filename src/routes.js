import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Asistencia from "./pages/Asistencia";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Personal from "./pages/Personal";
import NotFound from "./pages/404";
import ShowPersonal from "./pages/Personal/actions/ShowPersonal";
import CrearPersonal from "./pages/Personal/actions/CrearPersonal";
import EditarPersonal from "./pages/Personal/actions/EditarPersonal";

import Justificaciones from "./pages/Justificaciones";
import CrearJustificacion from "./pages/Justificaciones/actions/CrearJustificacion";

import AsistenciaAdmin from "./pages/AsistenciaAdmin";

export default function Routes() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
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
        <Route exact path="/admin/personal/show/:id" component={ShowPersonal} />
        <Route exact path="/admin/asistencia" component={AsistenciaAdmin} />
        <Route
          exact
          path="/admin/justificaciones"
          component={Justificaciones}
        />
        <Route
          exact
          path="/admin/justificacion/crear/:id"
          component={CrearJustificacion}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
