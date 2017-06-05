import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class ListItemPedidosToConfirm extends Component {
  
  componentWillMount() {
    this.props;
  }

  removeItem() {
    
  }

  render() {
    const Item = this.props.ItemPedido.Item;
    return (
        <View style={styles.pedidosNaoConfirmadosStyle}>
          <Text>
            {Item.Nome}
          </Text>
          <Button
            onPress={this.removeItem.bind(this)}
            title="X"
            color="red"
            accessibilityLabel="Deletar pedido"
            />  
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

export default ListItemPedidosToConfirm;
