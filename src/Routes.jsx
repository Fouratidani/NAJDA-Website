
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage';
import DashboardPage from './Components/Pages/DashboardPage';
import RankingPage from './Components/RankingPage';
import ContactsPage from './Components/ContactsPage';
import ProfilePage from './Components/ProfilePage';
import CoursesPage from './Components/CoursesPage';
import AboutUs from './Components/Pages/AboutUs' ;
const RoutesComponent = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;