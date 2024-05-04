// // components/MainScreen.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import LearningProgress from './LearningProgress';

// function MainScreen() {
//   const navigate = useNavigate();

//   const goToLearn = () => {
//     navigate('/learn'); // Переход на страницу обучения
//   };

//   return (
//     <div className="main-screen">
//       <h1>Добро пожаловать на страницу обучения </h1>
//       <p>Тут ты найдешь персональный план обученияи многое другое</p>

//       <LearningProgress/>
//       {/* <button onClick={goToLearn}>Перейти к обучению</button>
//       <p>Тут ты найдешь персональный план обучения</p> */}
//     </div>
//   );
// }

// export default MainScreen;
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LearningProgress from './LearningProgress';
import { AuthContext } from './utils/AuthContext'; // Импортируем контекст аутентификации

function MainScreen() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Получаем пользователя из контекста аутентификации

  // Переход на страницу обучения
  const goToLearn = () => {
    navigate('/learn');
  };

  // Проверяем, авторизован ли пользователь, и отображаем MainScreen только если пользователь авторизован
  return (
    <div className="main-screen">
      {user ? ( // Проверяем, есть ли пользователь
        <>
          <h1>Добро пожаловать на страницу обучения</h1>
          <p>Тут ты найдешь персональный план обучения и многое другое</p>
          <LearningProgress />
          {/* <button onClick={goToLearn}>Перейти к обучению</button> */}
        </>
      ) : (
        // Если пользователь не авторизован, отображаем сообщение об этом
        <h1>Пожалуйста, войдите или зарегистрируйтесь</h1>
      )}
    </div>
  );
}

export default MainScreen;
