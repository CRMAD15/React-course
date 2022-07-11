import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import NotFoundPage from './components/pages/404/NotFoundPage';
import LoginPage from './components/pages/auth/LoginPage';
import ApplicationRouter from './Routes/ApplicationRouter';
import AuthRouter from './Routes/AuthRouter';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRutes from './Routes/PublicRutes';
import LoginFormik from "./components/pure/forms/loginFormik";
import DashboardPage from './components/pages/dashboard/DashBoard';


const AppRoutingFinal = () => {
  //SIMULATION OF LOGIN WITHT THESE TWO CONST

  // TODO: Change to value from sessionStorage
  let loggin = true


  return (
    <div>
      <Router>
        <Routes>
          {/* Redirection to protect our routes */}
          <Route path='/' element={< PublicRutes loggin={loggin} />} />
          {/* Login Route */}
          <Route path="/login" element={<LoginFormik />} />







          {/* Dashboard */}

          <Route path="/dashboard" element={
            <PrivateRoutes loggin={loggin} >
              <ApplicationRouter />
            </PrivateRoutes>} />


          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingFinal