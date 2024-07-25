
import React, { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LearningProgress from './LearningProgress';
//import { AuthContext } from './utils/AuthContext'; // Импортируем контекст аутентификации
import './learnStyles.css'
import logo from '../components/assets/image/logo.png';
function MainScreen() {
  const navigate = useNavigate();
  // const { user } = useContext(AuthContext); // Получаем пользователя из контекста аутентификации

  // Переход на страницу обучения
  const goToLearn = () => {
    navigate('/learn');
  };
  // const { isAdmin } = useContext(AuthContext); // Получаем значение isAdmin из контекста аутентификации

  //  useEffect(() => {
  //   // Проверяем, является ли текущий пользователь администратором
  //   console.log('isAdmin:', isAdmin);
  // }, [isAdmin]); // Вызываем useEffect при изменении значения isAdmin
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
            <a href='https://eyeconweb.kaiten.ru/login?redirectPath=%2Fspace%2F377507%2Fcard%2F35166652'  target="_blank" rel="noopener noreferrer">
      <button className='ssyl'>Кайтен (он же трелло)</button>
      </a>
      <a href='https://docs.google.com/spreadsheets/d/1avSSVr8VWyZ7_iO643pDiqyNiDWcFfa3MkFIGkimmCw/edit?pli=1&gid=0#gid=0'  target="_blank" rel="noopener noreferrer">
      <button className='ssyl'>Таблица - подсказка(здесь вы найдете всё обо всём)</button>
      </a>
      <a href='https://docs.google.com/spreadsheets/d/19HQTBjl518R_izriXO_MVYmZ-ZB0tamUHRSZdLzt-nc/edit?gid=0#gid=0'  target="_blank" rel="noopener noreferrer">
      <button className='ssyl'>Таблица "Депы за карты" </button>
      </a>
      <a href='https://admin.pays-pro.com/dashboard'  target="_blank" rel="noopener noreferrer">
      <button className='ssyl'>ДМ</button>
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
