import PropTypes from "prop-types";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { token } = useAuthStore()

    if(!token) return <Navigate to="/"/>

    return (
        <>
            {children}
        </>
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute;
