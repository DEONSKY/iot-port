import { Navigate, Outlet } from "react-router-dom";
import SecuredLayout from "../layouts/SecuredLayout";

const PrivateOutlet = (...rest) => {
  const auth = true
  return (auth ?
    <SecuredLayout rest>
      <Outlet />
    </SecuredLayout>
    : <Navigate to="/guest/login" />
  )
}

export default PrivateOutlet