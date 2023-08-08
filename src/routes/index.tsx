import Menu from "@/components/Menu";
import ForgotPassword from "@/pages/ForgotPassword";
import ForgotPasswordSuccess from "@/pages/ForgotPassword/ForgotPasswordSuccess";
import Root from "@/pages/Root";
import Login from "@/pages/Login";
import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";
import Home from "@/pages/Dashboard/Home";
import Profile from "@/pages/Dashboard/Profile";
import AgentSelect from "@/pages/AgentSelect";

export default function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route element={<Root />}>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/forgot-password/success"
          element={<ForgotPasswordSuccess />}
        />

        <Route path="agent-select" element={<AgentSelect />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>

      <Route path="/dashboard" element={<Menu />}>
        <Route path="home" element={<Home />} />
        <Route path="profile/:agentId" element={<Profile />} />
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </ReactRouterDomRoutes>
  );
}
