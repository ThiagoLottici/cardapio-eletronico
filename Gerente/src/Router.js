import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Pedidos from './components/Pedidos';
import ItemPedidos from './components/ItemPedidos';


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
    //style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const RouterComponent = () => {
  return (
    <Router getSceneStyle={getSceneStyle}>
      <Scene 
        key="pedidos"
        title="COMANDAS"
        initial
        navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}
        hideBackImage
        component={Pedidos}
      />
      <Scene 
        key="itemPedidos"
        title="ITENS DA COMANDA"
        navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}
        component={ItemPedidos}
      />
    </Router>
  );
};

const styles = StyleSheet.create({
    navigationBarStyle: {
    backgroundColor: '#D32F2F'
  },
  titleStyle: {
    color:'white',
    fontWeight: 'bold'
  }
});

export default RouterComponent;
