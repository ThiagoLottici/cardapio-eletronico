import React, { Component } from 'react';
import { ListView, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidosToConfirm from './ListItemPedidosToConfirm';

class Comanda extends Component {

  componentWillMount() {
    //fetchComanda
    debugger;
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ comanda }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(comanda.pedidosList);
  }

  renderRow (pedido) {
    return (
      <ListItemPedidosToConfirm
        pedido={pedido}
        />
      );
  }

  finalizarPedido() {
    this.props.postPedido(this.props.pedidosList);
  }

  renderPedidosNaoConfirmados() {
    const pedidosList = this.props.comanda.pedidosList;
    if (pedidosList.length > 0) {
      return (
        <View>
        <Text style={styles.textStyle}>
          Pedidos não confirmados:
        </Text>
        <View>
            <ListView
               enableEmptySections
               dataSource={this.dataSource}
               renderRow={this.renderRow}
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

  render() {
    return (
      <View>
        {this.renderPedidosNaoConfirmados()}
      </View>
      );
  }
}

const styles = {
  textStyle: {
    padding: 2,
    textDecorationLine: 'underline'
  }
}

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps)(Comanda);
