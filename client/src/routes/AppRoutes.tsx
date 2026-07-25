import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home/Home";
import HomeLayout from "../layouts/HomeLayout";

const AppRoutes = () => {
  return (
    <Routes>
  {/* Public */}
  <Route
    path="/login"
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />

  {/* Protected */}
  <Route element={<ProtectedRoute />}>
    <Route element={<HomeLayout />}>
      <Route path="/home" element={<Home />} />
    </Route>
  </Route>
</Routes>
  );
};

export default AppRoutes;
