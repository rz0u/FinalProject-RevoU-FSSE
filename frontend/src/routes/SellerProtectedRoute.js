import { Navigate, navigate } from "react-router-dom";

function SellerProtectedRoute({ isSeller, children }) {
  if (!isAuthenticated) {
    return <Navigate to={`/`} replace />;
  }
  return children;
}

export default SellerProtectedRoute;
