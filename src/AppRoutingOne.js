import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Homepage from './components/pages/home/HomePage'
import NotFoundPage from './components/pages/404/NotFoundPage'
import AboutPages from './components/pages/about-faqs/AboutPages';
import ProfilePage from './components/pages/profile/ProfilePage';
import TasksPage from './components/task/TasksPage';
import TaskDetailPage from './components/task/TaskDetailPage';



const AppRoutingOne = () => {



  return (

    <Router>
      <div>
        <aside>
          <Link to='/'>||HOME|</Link>
          <Link to='/about' >|ABOUT|</Link>
          <Link to='/faqs' >|FQAs||</Link>
          <Link to='/fqs' >Not found</Link>


        </aside>
      </div>
      <main>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/faqs" element={<AboutPages />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/task' element={<TasksPage />} />
          <Route path='/task/:id' element={<TaskDetailPage />} />


          {/* 404 page not found */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>

    </Router>



  );
}

export default AppRoutingOne;



