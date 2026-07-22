import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ProtectedRouteProps } from "./route.types";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-background'>
        <p className='text-text-muted'>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;

  return children;
};

export default ProtectedRoute;
