import { user } from 'App';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  console.log('login');

  const onLogin = () => {
    user.authenticated = true;
    history.push('/home');
  };
  return (
    <div className="login">
      <Link to="/home">home</Link>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
