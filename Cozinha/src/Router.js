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
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const RouterComponent = () => {
  return (
    <Router getSceneStyle={getSceneStyle}>
     <Scene key="main">
      <Scene 
        key="pedidos"
        title="Pedidos"
        initial
        component={Pedidos}
      />
      <Scene 
        key="itemPedidos"
        title="Itens do Pedido"
        component={ItemPedidos}
      />
     </Scene>
    </Router>
  );
};

export default RouterComponent;
