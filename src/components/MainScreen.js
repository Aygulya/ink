
import React, { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LearningProgress from './LearningProgress';
import { AuthContext } from './utils/AuthContext'; // Импортируем контекст аутентификации
import './learnStyles.css'
import logo from '../components/assets/image/logo.png';
function MainScreen() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Получаем пользователя из контекста аутентификации

  // Переход на страницу обучения
  const goToLearn = () => {
    navigate('/learn');
  };
  const { isAdmin } = useContext(AuthContext); // Получаем значение isAdmin из контекста аутентификации

   useEffect(() => {
    // Проверяем, является ли текущий пользователь администратором
    console.log('isAdmin:', isAdmin);
  }, [isAdmin]); // Вызываем useEffect при изменении значения isAdmin
  // Проверяем, авторизован ли пользователь, и отображаем MainScreen только если пользователь авторизован
  return (
    <div className="main-screen">
            <div className="image-container">
        <div className="left">
        <img src={logo} alt="logo" className="firstLogo" />
       <p className='firstPay'>PaysPro</p> 
        </div>
        <div className="right">
        {/* <button onClick={toggleSidebar} className="sidebar-button">☰</button> */}
        </div>
      </div>
      {/* {isAdmin && ( // Условно отображаем ссылку на админ-панель только если пользователь администратор // className="home-link"
      //  <button className='butAdmin'>
      //    <Link to='/admPanel' className='textBut'> 
        
      //   Админ панель
      // </Link>
      //  </button>
      )} */}
      {user ? ( // Проверяем, есть ли пользователь
        <>
          <h1 className='textMain'>Добро пожаловать на страницу обучения</h1>
          <p className='textMain'>Тут ты найдешь персональный план обучения и многое другое.</p>
          <LearningProgress />
          {/* <button onClick={goToLearn}>Перейти к обучению</button> */}
        </>
      ) : (
        // Если пользователь не авторизован, отображаем сообщение об этом
        <h1>Пожалуйста, войдите или зарегистрируйтесь</h1>
      )}
      <Link to='/prosmotr'>
      <div>Просмотреть все дни</div>
      </Link>

    </div>
  );
}

export default MainScreen;
