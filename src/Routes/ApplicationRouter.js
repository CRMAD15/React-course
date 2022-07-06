import { Routes, Route } from "react-router-dom";
import ProfilePage from "../components/pages/profile/ProfilePage";

const ApplicationRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </>
    );
}

export default ApplicationRouter;

