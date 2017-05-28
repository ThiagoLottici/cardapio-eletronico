import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateUserForm from './components/CreateUserForm';
import Cardapio from './components/Cardapio';
import DetalhesPedido from './components/DetalhesPedido';
import TabIcon from './components/TabIcon';
import Comanda from './components/Comanda';


const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const RouterComponent = () => {
  return (
    <Router getSceneStyle={getSceneStyle}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="createUser" component={CreateUserForm} title="Create User" />
      </Scene>

     <Scene key="main">
      <Scene 
         key="root" 
         tabs 
         tabBarStyle={styles.tabBarStyle} 
         tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
         <Scene 
            key="cardapioScene"
            title="Cardápio"
            initial
            icon={TabIcon}
         >
          <Scene key="cardapio" component={Cardapio} title="Cardpáio" initial />
          <Scene key="dishDetail" component={DetalhesPedido} title="Detalhes do Prato" />
         </Scene>
         <Scene
            key="comandaScene"
            title="Comanda"
            icon={TabIcon}
         >
          <Scene key="comanda" component={Comanda} title="Comanda" initial />
         </Scene>
       </Scene>
       </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export default RouterComponent;
