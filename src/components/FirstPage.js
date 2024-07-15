// // // import React, {useState} from 'react';
// // // import LoginComponent from './login/LogIn';
// // // import RegisterComponent from './login/Registration';
// // // import './learnStyles.css'
// // // import logo from '../components/assets/image/logo.png'
// // // const FirstPage = ()=>{
// // //     const [showRegistration, setShowRegistration] = useState(false);
// // //     const [showLogin, setShowLogin] = useState(false);
// // //     const [loggedInUser, setLoggedInUser] = useState(null);

// // //     const handleRegistrationClick = () => {
// // //         setShowRegistration(true);
// // //         setShowLogin(false);
// // //       };
    
// // //       const handleLoginClick = () => {
// // //         setShowLogin(true);
// // //         setShowRegistration(false);
// // //       };
// // //     return(
// // // <div className="content-container">
// // // <h2>Привет</h2>
  
// // //   <div className="firstPage">
// // //     <p>Тут ты найдешь всю полезную информацию, которая понадобится тебе в процессе обучения и работы.</p>
// // //     <img src={logo} alt="logo"  className="firstLogo"/>
// // //   </div>
// // //   <div className='first'>
// // // <button onClick={handleRegistrationClick} className="but-home" >
// // //           Registration
// // //         </button>
// // //         <button onClick={handleLoginClick} className="but-home">
// // //           Login
// // //         </button>
// // //         {showRegistration ? (
// // //     <RegisterComponent onCancel={() => setShowRegistration(false)} />
// // //   ) : null}
// // //   {showLogin ? <LoginComponent setLoggedInUser={setLoggedInUser} /> : null}
// // //   </div>
// // // </div>
// // //     )
// // // }

// // // export default FirstPage;

// // // src/FirstPage.js
// // import React, { useState } from 'react';
// // import LoginComponent from './login/LogIn';
// // import RegisterComponent from './login/Registration';
// // import Sidebar from './Sidebar';
// // import './learnStyles.css';
// // import logo from '../components/assets/image/logo.png';

// // const FirstPage = () => {
// //   const [showRegistration, setShowRegistration] = useState(false);
// //   const [showLogin, setShowLogin] = useState(false);
// //   const [loggedInUser, setLoggedInUser] = useState(null);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const handleRegistrationClick = () => {
// //     setShowRegistration(true);
// //     setShowLogin(false);
// //     setIsSidebarOpen(false);
// //   };

// //   const handleLoginClick = () => {
// //     setShowLogin(true);
// //     setShowRegistration(false);
// //     setIsSidebarOpen(false);
// //   };

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     <div className="first">
// //      {/* <div className='first'> */}
// //         <button onClick={toggleSidebar} className="but-home">☰</button>
// //       {/* </div> */}

// //       <Sidebar 
// //         isOpen={isSidebarOpen} 
// //         toggleSidebar={toggleSidebar} 
// //         onRegisterClick={handleRegistrationClick} 
// //         onLoginClick={handleLoginClick} 
// //       />
// //       <div className="firstPage">

// //         <p>
// //         <h2>Привет</h2>
// //         Тут ты найдешь всю полезную информацию, которая понадобится тебе в процессе обучения и работы.</p>
// //         {/* <img src={logo} alt="logo" className="firstLogo" /> */}
// //       </div>

// //       {showRegistration ? (
// //         <RegisterComponent onCancel={() => setShowRegistration(false)} />
// //       ) : null}
// //       {showLogin ? (
// //         <LoginComponent setLoggedInUser={setLoggedInUser} />
// //       ) : null}
// //     </div>
// //   );
// // }

// // export default FirstPage;
// // src/FirstPage.js
// import React, { useState } from 'react';
// import LoginComponent from './login/LogIn';
// import RegisterComponent from './login/Registration';
// import Sidebar from './Sidebar';
// import './learnStyles.css';
// import logo from '../components/assets/image/logo.png';

// const FirstPage = () => {
//   // const [showRegistration, setShowRegistration] = useState(false);
//   // const [showLogin, setShowLogin] = useState(false);
//   // const [loggedInUser, setLoggedInUser] = useState(null);
//  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // const handleRegistrationClick = () => {
//   //   setShowRegistration(true);
//   //   setShowLogin(false);
//   //   setIsSidebarOpen(false);
//   // };

//   // const handleLoginClick = () => {
//   //   setShowLogin(true);
//   //   setShowRegistration(false);
//   //   setIsSidebarOpen(false);
//   // };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="first">
//       <button onClick={toggleSidebar} className="sidebar-button">☰</button>
//       {/* <Sidebar 
//         isOpen={isSidebarOpen} 
//         toggleSidebar={toggleSidebar} 
//         onRegisterClick={handleRegistrationClick} 
//         onLoginClick={handleLoginClick} 
//       /> */}
//       <div className="sidebar-text">
//         <h2>Привет</h2>
//         <p>Тут ты найдешь всю полезную информацию, которая понадобится тебе в процессе обучения и работы.</p>
//       </div>
//       <div className="image-container">
//         <img src={logo} alt="logo" className="firstLogo" />
//       </div>
//       {/* {showRegistration && <RegisterComponent onCancel={() => setShowRegistration(false)} />}
//       {showLogin && <LoginComponent setLoggedInUser={setLoggedInUser} />} */}
//     </div>
//   );
// }

// export default FirstPage;
// src/FirstPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './learnStyles.css';
import './animationText.css'
import logo from '../components/assets/image/logo.png';

const FirstPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [fullText, setFullText] = useState('Тут ты найдешь всю полезную информацию, которая понадобится тебе в процессе обучения и работы.');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100); // Adjust the speed of typing here
      return () => clearTimeout(timeoutId);
    }
  }, [index, fullText]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="first">
      <div className="image-container">
        <div className="left">
        <img src={logo} alt="logo" className="firstLogo" />
       <p className='firstPay'>PaysPro</p> 
        </div>
        <div className="right">
        {/* <button onClick={toggleSidebar} className="sidebar-button">☰</button> */}
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="sidebar-text">
        <p className='hello'>Привет</p>
        <div className="typing-container">
          {displayedText}
          <span className="typing-cursor"></span>
        </div>

      </div>
      <div className='hello'>
        <Link to='/mainScreen' className='prosmotr'>
        Далее
        </Link>
        </div>
    </div>
  );
}

export default FirstPage;
