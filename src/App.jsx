import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

// --- PLACEHOLDERS (We will replace these later) ---
import Navbar from "./components/layout/Navbar/Navbar-component";
// import LoginPage from "./components/auth/Login/Login-component";
import RegisterPage from "./components/auth/Register/Register-component";
import LoginPage from "./components/auth/Login/Login-component";
import UserDashboard from './components/user/Dashboard/Dashboard-component.jsx';

// Create a simple styled layout container
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px 0; /* Add vertical padding */
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* Center the content */
`;
// --- END PLACEHOLDERS ---

function App() {
  return (
    <Router>
      <Layout>
        {/* Navbar will be present on all pages */}
        <Navbar />

        <MainContent>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={< LoginPage/>} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Future Dashboard Routes */}
            <Route path="/" element={<UserDashboard />} />
            <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
            <Route path="/delivery" element={<h1>Delivery Dashboard</h1>} />
          </Routes>
        </MainContent>

        {/* Toast notifications container */}
        <ToastContainer position="top-center" autoClose={3000} />
      </Layout>
    </Router>
  );
}

export default App;
