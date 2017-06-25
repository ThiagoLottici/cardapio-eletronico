import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ListItemPedidosConfirmados extends Component {
  
  componentWillMount() {
    this.props;
  }

  render() {
    const Item = this.props.ItemPedido.Item;
    return (
        <View style={styles.pedidosNaoConfirmadosStyle} accessible accessibilityLabel={Item.Nome}>
         <View style={{ flex: 8 }}>
            <Text>
              {Item.Nome}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text>
              R$ {Item.Preco}
            </Text>
          </View>
        </View>
      );
  }
}

const styles = {
  pedidosNaoConfirmadosStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ListItemPedidosConfirmados;
