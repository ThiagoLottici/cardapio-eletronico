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

  renderPedidosConfirmados() {
    const pedidosConfirmados = this.props.comanda.pedidosConfirmados;
    if (pedidosConfirmados.length > 0) {
      return (
        <View style={{ flex: 0.35 }}>
          <View accessible accessibilityLabel={'Pedidos confirmados!'}>
              <Text style={styles.textStyle}>
                PEDIDOS CONFIRMADOS
              </Text>
          </View>
        <View style={styles.listViewContainer} accessible accessibilityLabel={'Lista de pedidos confirmados!'}>
            <ListView
               enableEmptySections
               dataSource={this.pedidosConfirmadosDataSource}
               renderRow={this.pedidosConfirmadosRenderRow}
            />
         </View>
         </View>
        );

  renderTotalComanda() {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 2 }}>
            <Text>
              TOTAL:
            </Text>
        </View>
          <View style={{ flex: 1, paddingRight: 30 }}>
            <Text style={{ textAlign: 'right' }}>
              R$ {this.props.comanda.totalPedidos}
            </Text>
          </View>
      </View>
      );
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
          <View style={{ flex: 0.9 }}>
            {this.renderPedidosConfirmados()}
          </View>
        <View style={{ flex: 0.1 }}>
            {this.renderTotalComanda()}
        </View>
        </View>
        );
  }
}

const mapStateToProps = state => {

  return { pedidos: state.pedidos };
};

export default connect(mapStateToProps, { setCheckedPropToItemPedido, putPedido })(ItemPedidos);
