import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateUserForm from './components/CreateUserForm';
import Cardapio from './components/Cardapio';
import DetalhesPedido from './components/DetalhesPedido';
import TabIcon from './components/TabIcon';
import Comanda from './components/Comanda';
import Mesas from './components/Mesas';


const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
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
        <Scene key="login" component={LoginForm} title="LOGIN" titleStyle={styles.titleStyle} navigationBarStyle={ styles.navigationBarStyle} />
        <Scene key="createUser" component={CreateUserForm} title="CREATE USER" titleStyle={styles.titleStyle} navigationBarStyle={ styles.navigationBarStyle} />
      </Scene>

      <Scene key="mesas" component={Mesas} title="MESAS" navigationBarStyle={ styles.navigationBarStyle} titleStyle={styles.titleStyle} />

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
          <Scene key="cardapio" component={Cardapio} title="CARDÁPIO" initial navigationBarStyle={ styles.navigationBarStyle} titleStyle={styles.titleStyle} />
          <Scene key="dishDetail" component={DetalhesPedido} title="DETALHES DO PRATO" navigationBarStyle={ styles.navigationBarStyle} titleStyle={styles.titleStyle} />
         </Scene>
         <Scene
            key="comandaScene"
            title="Comanda"
            icon={TabIcon}
            titleStyle={{ color:'white' }}
         >
          <Scene key="comanda" component={Comanda} title="COMANDA" initial navigationBarStyle={ styles.navigationBarStyle} titleStyle={styles.titleStyle} />
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
  navigationBarStyle: {
    backgroundColor: '#D32F2F'
  },
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  titleStyle: {
    color:'white',
    fontWeight: 'bold'
  }
});

export default RouterComponent;
