import { Routes, Route } from "react-router-dom";
import TaskListComponent from "../components/container/task.list";
import DashboardPage from "../components/pages/dashboard/DashBoard";
// import ProfilePage from "../components/pages/profile/ProfilePage";
// import TaskDetailPage from "../components/task/TaskDetailPage";
// import TasksPage from "../components/task/TasksPage";

// const ApplicationRouter = () => {


//     return (
//         <>
//             <Routes>
//                 <Route path="" element={<DashboardPage />} />
//             </Routes>

//         </>
//     );
// }


const ApplicationRouter = () => {


    return (
        <>
            <Routes>
                <Route path="" element={<TaskListComponent />} />
            </Routes>

        </>
    );
}


// (<Routes>
//     <Route path='/*' element={<ProfilePage />} />
//     <Route path='/*/task' element={<TasksPage />} />
//     <Route path='/*/task/:id' element={<TaskDetailPage />} />
// </Routes>)


export default ApplicationRouter;

