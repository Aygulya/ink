import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import './form.css';
import { AuthContext } from '../utils/AuthContext';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user, isBlocked } = useContext(AuthContext);


  const handleLogin = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password.padEnd(6,0), );

      // Проверяем, заблокирован ли пользователь
      // if (user  && !user.disabled) {
        if(user){
if(isBlocked == false){
  navigate('/mainScreen');
}
else{
  navigate('/ozhidaem')
}

      } else {
        setErrorMessage('Your account is blocked or deleted.');
        setShowModal(true);
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid username or password. Please try again.');
        setShowModal(true);
      } else {
        console.error(error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="form-container">
        {/* <h2>LOGIN</h2> */}
        <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} className='input-form'/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-form'/>
        <button onClick={handleLogin} className='but-login'>войти</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>{errorMessage}</h1>
            <button onClick={handleCloseModal} className='but-login'>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginComponent;
