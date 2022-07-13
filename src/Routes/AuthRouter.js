import { Routes, Route } from "react-router-dom";
import LoginFormik from "../components/pure/forms/loginFormik";

//  Rutas de Auth para registro y log in
// const AuthRouter = () => {

//     return (
//         <Routes>
//             <Route path="/login" element={<LoginFormik />} />
//         </Routes>
//     );
// }


const AuthRouter = () => {

    return (
        <LoginFormik />
    );
}

export default AuthRouter;
