import Menu from "@/components/Menu";
import ForgotPassword from "@/pages/ForgotPassword";
import ForgotPasswordSuccess from "@/pages/ForgotPassword/ForgotPasswordSuccess";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";

export default function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route element={<Home />}>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/forgot-password/success"
          element={<ForgotPasswordSuccess />}
        />
      </Route>

      <Route path="/dashboard" element={<Menu />}>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="profile" element={<h1>Perfil</h1>} />
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </ReactRouterDomRoutes>
  );
}
