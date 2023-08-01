import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Login />} />
    </ReactRouterDomRoutes>
  );
}
