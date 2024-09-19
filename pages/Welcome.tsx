import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { clearToken } from '../features/userSlice';

const Welcome: React.FC = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <div>
      <h2>Bem-vindo!</h2>
      {token ? (
        <div>
          <p>Você está logado!</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <p>Por favor, faça o login.</p>
      )}
    </div>
  );
};

export default Welcome;