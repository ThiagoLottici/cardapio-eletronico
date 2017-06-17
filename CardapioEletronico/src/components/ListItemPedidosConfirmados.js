import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class ListItemPedidosConfirmados extends Component {
  
  componentWillMount() {
    this.props;
  }

  render() {
    const Item = this.props.ItemPedido.Item;
    return (
        <View style={styles.pedidosNaoConfirmadosStyle}>
          <Text>
            {Item.Nome}
          </Text>
            {Item.Item}
          <Text>
          </Text>
        </View>
      );
  }
}

const styles = {
  pedidosNaoConfirmadosStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ListItemPedidosConfirmados;
