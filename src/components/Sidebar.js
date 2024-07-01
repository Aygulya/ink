// // src/Sidebar.js
// import React, { useState } from 'react';
// import LoginComponent from './login/LogIn';
// import RegisterComponent from './login/Registration';
// import './Sidebar.css';

// const Sidebar = ({ isOpen, toggleSidebar, onRegisterClick, onLoginClick }) => {
//     const [showRegistration, setShowRegistration] = useState(false);
//     const [showLogin, setShowLogin] = useState(false);
//     const [loggedInUser, setLoggedInUser] = useState(null);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//     const handleRegistrationClick = () => {
//       setShowRegistration(true);
//       setShowLogin(false);
//       setIsSidebarOpen(false);
//     };
  
//     const handleLoginClick = () => {
//       setShowLogin(true);
//       setShowRegistration(false);
//       setIsSidebarOpen(false);
//     };
//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <button onClick={toggleSidebar} className="close-btn">×</button>
//       <nav>
//         <ul>
//           <li><button onClick={onRegisterClick} className="menu-btn">Registration</button></li>
//           {showRegistration && <RegisterComponent onCancel={() => setShowRegistration(false)} />}
//           <li><button onClick={onLoginClick} className="menu-btn">Login</button></li>
//           {showLogin && <LoginComponent setLoggedInUser={setLoggedInUser} />}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// src/Sidebar.js
import React, { useState } from 'react';
import LoginComponent from './login/LogIn';
import RegisterComponent from './login/Registration';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegistration(false);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="close-btn">×</button>
      <nav>
        <ul>
          <li>
            <button onClick={handleRegistrationClick} className="menu-btn">Registration</button>
          </li>
          <li>
            <button onClick={handleLoginClick} className="menu-btn">Login</button>
          </li>
        </ul>
        {showRegistration && <RegisterComponent onCancel={() => setShowRegistration(false)} />}
        {showLogin && <LoginComponent onCancel={() => setShowLogin(false)} />}
      </nav>
    </div>
  );
};

export default Sidebar;
