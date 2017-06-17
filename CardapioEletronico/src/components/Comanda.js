import React, { Component } from 'react';
import { ListView, View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidosToConfirm from './ListItemPedidosToConfirm';
import ListItemPedidosConfirmados from './ListItemPedidosConfirmados';
import { pedidosConfirmadosFetch, postPedido } from '../actions';


class Comanda extends Component {

  componentWillMount() {
    debugger;
    this.props.pedidosConfirmadosFetch(this.props.comanda.comanda.Id);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    this.createDataSource(nextProps);
  }

    createPedidosNaoConfirmadosDataSource(comanda) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.pedidosNaoConfirmadosDataSource = ds.cloneWithRows(comanda.pedidosNaoConfirmados);
  }

  createPedidosConfirmadosDataSource(comanda) {
    debugger;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.pedidosConfirmadosDataSource = ds.cloneWithRows(comanda.pedidosConfirmados);
  }

  createDataSource({ comanda }) {
    this.createPedidosNaoConfirmadosDataSource(comanda);
    this.createPedidosConfirmadosDataSource(comanda);
  }

  finalizarPedido() {
    this.props.postPedido(this.props.comanda);
  }

    pedidosNaoConfirmadosRenderRow(ItemPedido) {
    return (
      <ListItemPedidosToConfirm
        ItemPedido={ItemPedido}
        />
      );
  }

  pedidosConfirmadosRenderRow(ItemPedido) {
    return (
      <ListItemPedidosConfirmados 
        ItemPedido={ItemPedido}
        />
      );
  }

  renderPedidosNaoConfirmados() {
    const pedidosNaoConfirmados = this.props.comanda.pedidosNaoConfirmados;
    if (pedidosNaoConfirmados.length > 0) {
      return (
        <View>
        <Text style={styles.textStyle}>
          Pedidos não confirmados
        </Text>
        <View style={styles.listViewContainer}>
            <ListView
               enableEmptySections
               dataSource={this.pedidosNaoConfirmadosDataSource}
               renderRow={this.pedidosNaoConfirmadosRenderRow}
            />
         </View>
         <Button 
          title="Confirmar pedidos"
          onPress={this.finalizarPedido.bind(this)}
         />
         </View>
        );
    } else {
      return null;
    }
  }

  renderPedidosConfirmados() {
    debugger;
    const pedidosConfirmados = this.props.comanda.pedidosConfirmados;
    if (pedidosConfirmados.length > 0) {
      return (
        <View>
        <Text style={styles.textStyle}>
          Pedidos confirmados
        </Text>
        <View style={styles.listViewContainer}>
            <ListView
               enableEmptySections
               dataSource={this.pedidosConfirmadosDataSource}
               renderRow={this.pedidosConfirmadosRenderRow}
            />
         </View>
         </View>
        );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View>
        {this.renderPedidosNaoConfirmados()}
        {this.renderPedidosConfirmados()}
        <Text>
        Total: R$ 10,00
        </Text>
      </View>
      );
  }
}

const styles = {
  textStyle: {
    padding: 2,
    paddingBottom: 10,
    textDecorationLine: 'underline'
  },
  listViewContainer: {
    paddingTop: 10,
    borderTopColor: '#bbb',
    borderTopWidth: StyleSheet.hairlineWidth

  }
};

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps, { pedidosConfirmadosFetch, postPedido })(Comanda);
