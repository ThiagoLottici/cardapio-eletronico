import React, { Component } from 'react';
import { ListView, View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListItemItemPedidos from './ListItemItemPedidos';
import { setCheckedPropToItemPedido, putPedido } from '../actions';
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

class ItemPedidos extends Component {

  componentWillMount() { //this.props.Item
    this.props.setCheckedPropToItemPedido(this.props.Item.ItemPedidos);
    this.createDataSource(this.props.itemPedidos);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.itemPedidos);
  }

    createDataSource(itemPedidos) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(itemPedidos);
  }

    renderRow(itemPedido) {
    return (
      <ListItemItemPedidos
      ItemPedido={itemPedido}
      />
    );
  }

  finalizarPedido() {
    this.props.putPedido(this.props);
  }


  render() {
    return (
      <View>
        <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
        <Button
        title="Finalizar Pedido"
        disabled={this.props.itemPedidoProntoDisabled}
        onPress={this.finalizarPedido.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let itemPedidoDisabled = false;
  state.pedidos.itemPedidos.forEach(Item => {
    if (Item.Checked === false) {
      itemPedidoDisabled = true;
    }
  });
  state.pedidos.itemPedidoProntoDisabled = itemPedidoDisabled;
  return state.pedidos;
};

export default connect(mapStateToProps, { setCheckedPropToItemPedido, putPedido })(ItemPedidos);
