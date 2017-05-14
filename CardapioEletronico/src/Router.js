import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateUserForm from './components/CreateUserForm';
import Cardapio from './components/Cardapio';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="createUser" component={CreateUserForm} title="Create User" />
      </Scene>

      <Scene key="main">
        <Scene key="cardapio" component={Cardapio} title="Cardpáio" initial/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
