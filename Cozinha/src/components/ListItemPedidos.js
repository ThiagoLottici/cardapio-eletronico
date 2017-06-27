import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class ListItemPedidos extends Component {
  
  componentWillMount() {
    debugger;
    this.props;
  }

  onRowPress() {
    Actions.itemPedidos({ Item: this.props.Item });
  }

  render() {
    const Item = this.props.Item;
    const pedidoLabel = `Pedido#${Item.Id}`;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.pedidosNaoConfirmadosStyle}>
          <View style={{ flex: 2}}>
          <Text style={{ fontWeight: 'bold', color: 'orange' }}>
            {pedidoLabel}
          </Text>
          </View>
          <View style={{ flex: 1}}>
          <Text>
            {this.props.Item.ItemPedidos.length} Itens 
          </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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

export default ListItemPedidos;
