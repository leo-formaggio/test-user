import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Welcome from '../pages/Welcome';
import UserList from '../components/userList';
import Navbar from '../components/Navbar';
import './components/Navbar.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={< Login />}></Route>
            <Route path="/register" element={< Register />}></Route>
            <Route path="/welcome" element={ <Welcome />}></Route>
            <Route path="/users" element={<UserList />} />
            <Route path="/" element={< Login />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;