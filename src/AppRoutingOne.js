import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import Homepage from './components/pages/home/HomePage'
import NotFoundPage from './components/pages/404/NotFoundPage'
import AboutPages from './components/pages/about-faqs/AboutPages';
import ProfilePage from './components/pages/profile/ProfilePage';
import TasksPage from './components/task/TasksPage';
import TaskDetailPage from './components/task/TaskDetailPage';
import LoginPage from './components/pages/auth/LoginPage';
import { createContext, useEffect, useState } from 'react';
import PublicRoutes from './Routes/PublicRutes'
import AuthRouter from './Routes/AuthRouter'
import PrivateRoutes from './Routes/PrivateRoutes';
import ApplicationRouter from './Routes/ApplicationRouter';



const AppRoutingOne = () => {
  //SIMULATION OF LOGIN WITHT THESE TWO CONST
  let isLogged = false

  useEffect(() => {
    isLogged = localStorage.getItem('credential')
    console.log('User logged', isLogged)

  }, []);


  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>||HOME|</Link>
          <Link to='/login' >Login</Link>
          <Link to='/about' >|ABOUT|</Link>
          <Link to='/faqs' >|FQAs||</Link>
          <Link to='/any404' >Not found</Link>
        </aside>
      </div>
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route
            path='/*'
            element={
              <PublicRoutes isLogged={isLogged} >
                <AuthRouter />
              </PublicRoutes>
            }
          />

          <Route
            path='/profile'
            element={
              <PrivateRoutes isLogged={isLogged} >
                <ApplicationRouter />
              </PrivateRoutes>
            }
            
          />

        </Routes>
      </main >
    </Router>
  );
}

export default AppRoutingOne;