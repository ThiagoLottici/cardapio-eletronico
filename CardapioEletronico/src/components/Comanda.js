import React, { Component } from 'react';
import { ListView, View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidosToConfirm from './ListItemPedidosToConfirm';
import ListItemPedidosConfirmados from './ListItemPedidosConfirmados';
import { pedidosConfirmadosFetch, postPedido } from '../actions';
import { ConfirmButton } from './common';


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
        <View style={{ flex: 0.55 }} accessible accessibilityLabel={'Pedidos não confirmados!'} >
          <View style={ { borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Text style={styles.textStyle}>
              PEDIDOS NÃO CONFIRMADOS
          </Text>
          </View>
        <View style={styles.listViewContainer, { flex: 0.10 }} accessible accessibilityLabel={'Lista de pedidos não confirmados'}>
            <ListView
               enableEmptySections
               dataSource={this.pedidosNaoConfirmadosDataSource}
               renderRow={this.pedidosNaoConfirmadosRenderRow}
            />
         </View>
             <View style={{ alignItems: 'flex-end', paddingBottom: 5, paddingTop: 5 }}>
                 <ConfirmButton
                 accessible accessibilityLabel={'Pressione para finalizar o pedido'} 
                  onPress={this.finalizarPedido.bind(this)}
                 >
                    Confirmar
                 </ConfirmButton>
             </View>
         </View>
        );
    } else {
      return <View style={{ flex: 0 }}></View>;
    }
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
    } else {
      return <View style={{ flex: 0 }}></View>;
    }
  }

  renderTotalPedidosNaoConfirmados() {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 2 }}>
            <Text>
              TOTAL Pedidos não confirmados:
            </Text>
        </View>
          <View style={{ flex: 1, paddingRight: 30 }}>
            <Text style={{ textAlign: 'right' }}>
              R$ {this.props.comanda.totalPedidosNaoConfirmados}
            </Text>
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
            {this.renderPedidosNaoConfirmados()}
            {this.renderPedidosConfirmados()}
          </View>
        <View style={{ flex: 0.1 }}>
            {this.renderTotalPedidosNaoConfirmados()}
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

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps, { pedidosConfirmadosFetch, postPedido })(Comanda);
