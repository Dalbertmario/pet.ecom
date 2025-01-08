import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles,children}) => {
// const {role} = useSelector(state=>state.uistore)
const role = JSON.parse(localStorage.getItem('role'))
    if (!role?.user?.role) {
        return <Navigate to="/login" />
    }

    if (!allowedRoles.includes(role?.user?.role)) {
        return <Navigate to="/unauthorized" />
    }
    return children;
};

export default ProtectedRoute;