import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import Homepage from './components/pages/home/HomePage'
import NotFoundPage from './components/pages/404/NotFoundPage'
import AboutPages from './components/pages/about-faqs/AboutPages';
import ProfilePage from './components/pages/profile/ProfilePage';
import TasksPage from './components/task/TasksPage';
import TaskDetailPage from './components/task/TaskDetailPage';
import PrivateRoutes from './PrivateRoutes';
import LoginPage from './components/pages/auth/LoginPage';
import { createContext, useState } from 'react';
import { fakeAuthProvider } from './auth';


// const AppRoutingOne = () => {


//   return (

//     <Router>
//       <div>
//         <aside>
//           <Link to='/'>||HOME|</Link>
//           <Link to='/login' >Login</Link>

//           <Link to='/about' >|ABOUT|</Link>
//           <Link to='/faqs' >|FQAs||</Link>
//           <Link to='/any404' >Not found</Link>



//         </aside>
//       </div>
//       <main>

//         <Routes>
//           <Route path='/' element={<Homepage />} />
//           <Route path='/login' element={<PrivateRoutes />} >
//             <Route path="" element={<LoginPage />} />
//           </Route>

//           <Route path="/about" element={<AboutPages />} />
//           <Route path="/faqs" element={<AboutPages />} />


//           <Route path="/profile" element={<PrivateRoutes />} >
//             <Route path="" element={<ProfilePage />} />
//           </Route>



//           <Route path='/task' element={<TasksPage />} />
//           <Route path='/task/:id' element={<TaskDetailPage />} />


//           {/* 404 page not found */}
//           <Route path='*' element={<NotFoundPage />} />
//         </Routes>
//       </main>

//     </Router>



//   );
// }

// export default AppRoutingOne;



const AppRoutingOne = () => {
//SIMULATION OF LOGIN WITHT THESE TWO CONST
  const isLogged = true
  const isVerify = true
  return (

    <Router>
      
   </Router>
  );
}

export default AppRoutingOne;