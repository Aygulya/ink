
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
    <div className='first'>
    <div className="main-screen">
            <div className="image-container">
        <div className="left">
        <img src={logo} alt="logo" className="firstLogo" />
       <p className='firstPay'>PaysPro</p> 
        </div>
        <div className="right">
        <Link to='/prosmotr'>
      <div className='prosmotr'>Просмотреть все дни</div>
      </Link>
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
      {/* {user ? ( // Проверяем, есть ли пользователь */}

          <h1 className='textMain'>Добро пожаловать на страницу обучения</h1>
          <p className='textMain'>Тут ты найдешь персональный план обучения и многое другое.</p>
          <div className='centreLR'>
        <div className="leftR">
          <LearningProgress />
          </div>
          <div className='right'>
            <h1 className='prosmotr'>Полезные ссылки</h1>
            <a href='https://docs.google.com/spreadsheets/d/1Yba9g6JQDEfO7OAUdUNLvJ9Ma9b4Td-H_VGbBGUShy4/edit?usp=sharing'  target="_blank" rel="noopener noreferrer">
      <button className='butGoToLearn prosmotr letters'>БД для операторов </button>
      </a>
      <a href='https://docs.google.com/spreadsheets/d/1WsBtHmf-RU7VViHHWowg1lwDG3chyrUF4q6L3KO7u88/edit?gid=326229264#gid=326229264'  target="_blank" rel="noopener noreferrer">
      <button className='butGoToLearn prosmotr letters'>Текучка</button>
      </a>
      <a href='https://drive.google.com/drive/folders/1IP2G_JW3wSL7aUAUGFqErWySGDOSAZHY'  target="_blank" rel="noopener noreferrer">
      <button className='butGoToLearn prosmotr letters'>База чеков не ФШ + Видеоуроки</button>
      </a>
      <a href='https://docs.google.com/spreadsheets/d/12sSKbMnPkdBMl82fjsbMGUAYihEex_bq3G-BBw4pLkE/edit?gid=1941705862#gid=1941705862'  target="_blank" rel="noopener noreferrer">
      <button className='butGoToLearn prosmotr letters'>Сверка расхождений</button>
      </a>
          </div>
          </div>
          {/* <button onClick={goToLearn}>Перейти к обучению</button> */}

      {/* ) : (
        // Если пользователь не авторизован, отображаем сообщение об этом
        <h1>Пожалуйста, войдите или зарегистрируйтесь</h1>
      )} */}

</div>
    </div>
  );
}

export default MainScreen;
