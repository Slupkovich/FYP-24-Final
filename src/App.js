// Importing necessary modules and components
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Routing components
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import './App.css'; // Custom styles for the app
import WebNavBar from './components/WebNavBar'; // Navigation bar component
import Login from './components/Auth/Login'; // Login page
import SignUp from './components/Auth/SignUp'; // Signup page
import { Account } from "./components/Account"; // Account context provider
import ScrollUp from './components/ScrollUp'; // Component for scrolling up on page change
import Homepage from './pages/HomePage/HomePage'; // Homepage component
import ModuleOne from './pages/ModuleOne/Mone'; // Module One main page
import ModOnePageTwo from './pages/ModuleOne/M1P2/ModOnePageTwo'; // Sub-page of Module One
import ModOnePageThree from './pages/ModuleOne/M1P3/ModOnePageThree'; // Sub-page of Module One
import ModOnePageFour from './pages/ModuleOne/M1P4/ModOnePageFour'; // Sub-page of Module One
import ModOnePageFive from './pages/ModuleOne/M1P5/ModOnePageFive'; // Sub-page of Module One
import ModuleTwo from './pages/ModuleTwo/Tone'; // Module Two main page
import ModuleThree from './pages/ModuleThree/Throne'; // Module Three main page
import ModuleFour from './pages/ModuleFour/Mour'; // Module Four main page
import ModuleFive from './pages/ModuleFive/Mive'; // Module Five main page
import ModuleSix from './pages/ModuleSix/Mix'; // Module Six main page
import Contact from './pages/FeedBack/Contact'; // Contact page
import Resource from './pages/Resources/Resource'; // Resources page
import NotFound from './pages/404/FOF'; // 404 Not Found page

// Main App component
function App() {
  // Using useLocation to get the current path
  const location = useLocation();
  // List of routes where the WebNavBar should not be displayed
  const hideWebNavBarRoutes = ['/login', '/signup'];

  return (
    <Account>
      <div className="App">
        {/* Conditional rendering of WebNavBar based on the current route */}
        {!hideWebNavBarRoutes.includes(location.pathname) && <WebNavBar />}
        {/* ScrollUp component to handle scrolling to the top on route changes */}
        <ScrollUp />
        {/* Routes setup for different pages in the application */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/moduleOne" element={<ModuleOne />} />
          <Route path="/moduleOne/M1P2" element={<ModOnePageTwo />} />
          <Route path="/moduleOne/M1P3" element={<ModOnePageThree />} />
          <Route path="/moduleOne/M1P4" element={<ModOnePageFour />} />
          <Route path="/moduleOne/M1P5" element={<ModOnePageFive />} />
          <Route path="/moduleTwo" element={<ModuleTwo />} />
          <Route path="/moduleThree" element={<ModuleThree />} />
          <Route path="/moduleFour" element={<ModuleFour />} />
          <Route path="/moduleFive" element={<ModuleFive />} />
          <Route path="/moduleSix" element={<ModuleSix />} />
          <Route path="/feedbackMe" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Catch-all route for any undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Account>
  );
}

// Exporting App to be used in index.js
export default App;
