import React, { Component } from 'react';
import { ListView, View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListItemItemPedidos from './ListItemItemPedidos';
import { createItemList, putPedido } from '../actions';
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

class ItemPedidos extends Component {

  componentWillMount() { //this.props.Pedidos
    this.props.createItemList(this.props.Pedidos);
     const ItemList = [];
      this.props.Pedidos.forEach(value => {
          value.ItemPedidos.forEach(valueItemPedidos => {
              ItemList.push(Object.assign({}, valueItemPedidos.Item));
      });
    });
    this.createDataSource(ItemList);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    this.createDataSource(nextProps.pedidos.itemPedidos);
  }

  createPedidosConfirmadosDataSource(ItemList) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.pedidosConfirmadosDataSource = ds.cloneWithRows(ItemList);
  }

    createDataSource(ItemList) {
    this.createPedidosConfirmadosDataSource(ItemList);
  }

    pedidosConfirmadosrenderRow(itemPedido) {
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
               renderRow={this.pedidosConfirmadosrenderRow}
            />
         </View>
         </View>
        );
    }

  renderTotalComanda() {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 2 }}>
            <Text>
              TOTAL:
            </Text>
        </View>
          <View style={{ flex: 1, paddingRight: 30 }}>
            <Text style={{ textAlign: 'right', fontWeight: 'bold', color: 'green' }}>
              R$ {this.props.pedidos.totalPedidos}
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

const styles = {
  textStyle: {
    padding: 2,
    paddingBottom: 5,
    fontSize: 16,
    fontFamily: 'Roboto'
  },
  listViewContainer: {
    borderTopColor: '#bbb',
    borderTopWidth: StyleSheet.hairlineWidth,

  }
};

const mapStateToProps = state => {

  return { pedidos: state.pedidos };
};

export default connect(mapStateToProps, { createItemList, putPedido })(ItemPedidos);
