import React, {useState} from 'react';
import LoginComponent from './login/LogIn';
import RegisterComponent from './login/Registration';
import './learnStyles.css'

const FirstPage = ()=>{
    const [showRegistration, setShowRegistration] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleRegistrationClick = () => {
        setShowRegistration(true);
        setShowLogin(false);
      };
    
      const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegistration(false);
      };
    return(
<div className="content-container">
  <h2>HELLO</h2>
  <div className='first'>
<button onClick={handleRegistrationClick} className="but-home" >
          Registration
        </button>
        <button onClick={handleLoginClick} className="but-home">
          Login
        </button>
        {showRegistration ? (
    <RegisterComponent onCancel={() => setShowRegistration(false)} />
  ) : null}
  {showLogin ? <LoginComponent setLoggedInUser={setLoggedInUser} /> : null}
  </div>
</div>
    )
}

export default FirstPage;