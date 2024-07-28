// // // // // components/Header.js
// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faHome } from '@fortawesome/free-solid-svg-icons';
// // // // import './Header.css'

// // // // function Header({ userEmail }) {
// // // //   return (
// // // //     <div className="header">
// // // //       <Link to="/mainScreen" className="home-link">
// // // //         <FontAwesomeIcon icon={faHome} />
// // // //       </Link>

// // // //       <Link to='/admPanel' className="home-link">
// // // //         Админ панель
// // // //       </Link>
// // // //       <div className="user-email">{userEmail}</div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Header;
// // // // components/Header.js
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faHome } from '@fortawesome/free-solid-svg-icons';
// // // import './Header.css'

// // // function Header({ userEmail, isAdmin }) {
// // //   return (
// // //     <div className="header">
// // //       <Link to="/mainScreen" className="home-link">
// // //         <FontAwesomeIcon icon={faHome} />
// // //       </Link>
      
// // //       {isAdmin && ( // Conditionally render admin panel link
// // //         <Link to='/admPanel' className="home-link">
// // //           Админ панель
// // //         </Link>
// // //       )}
// // //       <div className="user-email">{userEmail}</div>
// // //     </div>
// // //   );
// // // }

// // // export default Header;
// // // components/Header.js
// // import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHome } from '@fortawesome/free-solid-svg-icons';
// // import { AuthContext } from './utils/AuthContext'; // Import the AuthContext
// // import './Header.css'

// // function Header({ userEmail }) {
// //   const { isAdmin } = useContext(AuthContext); // Get isAdmin from AuthContext

// //   return (
// //     <div className="header">
// //       <Link to="/mainScreen" className="home-link">
// //         <FontAwesomeIcon icon={faHome} />
// //       </Link>
      
// //       {isAdmin && ( // Conditionally render admin panel link
// //         <Link to='/admPanel' className="home-link">
// //           Админ панель
// //         </Link>
// //       )}
// //       <div className="user-email">{userEmail}</div>
// //     </div>
// //   );
// // }

// // export default Header;
// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import './Header.css';
// import { AuthContext } from './utils/AuthContext'; // Импортируем контекст аутентификации

// function Header({ userEmail }) {
//   // const { isAdmin } = useContext(AuthContext); // Получаем значение isAdmin из контекста аутентификации

//   //  useEffect(() => {
//   //   // Проверяем, является ли текущий пользователь администратором
//   //   console.log('isAdmin:', isAdmin);
//   // }, [isAdmin]); // Вызываем useEffect при изменении значения isAdmin

//   return (
//     <div className="header">
//       <Link to="/mainScreen" className="home-link">
//         <FontAwesomeIcon icon={faHome} />
//       </Link>
      
//       {/* {isAdmin && ( // Условно отображаем ссылку на админ-панель только если пользователь администратор
//         <Link to='/admPanel' className="home-link">
//           Админ панель
//         </Link>
//       )} */}
//       <div className="user-email">{userEmail}</div>
//     </div>
//   );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import ButtonNP from './buttonNP'; // Импортируем компонент ButtonNP
import logo from '../components/assets/image/logo.png';
function Header({ currentDay }) {
  return (
    <div className="header">
              <div className="leftH">
        <img src={logo} alt="logo" className="firstLogo" />
       <p className='firstPayH'>PaysPro</p> 
        </div>
        <div className='rightH'>
        <Link to="/mainScreen" className="home-link">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/prosmotr" className="home-link">
      <FontAwesomeIcon icon={faCalendar} />
      </Link>
      <ButtonNP currentDay={currentDay} iconOnly={true} /> {/* Добавляем кнопки навигации */}

        </div>
    </div>
  );
}

export default Header;
