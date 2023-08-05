import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";

export default function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route element={<Home />}>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<h1>Esqueceu a senha?</h1>} />
      </Route>
    </ReactRouterDomRoutes>
  );
}
