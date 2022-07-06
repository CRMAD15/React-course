import { Routes, Route } from "react-router-dom";
import LoginFormik from "../components/pure/forms/loginFormik";
import RegisterFormik from "../components/pure/forms/registerFormik";

//  Rutas de Auth para registro y log in
const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginFormik />} />
                <Route path="/register" element={<RegisterFormik />} />
            </Routes>
        </div>
    );
}

export default AuthRouter;
