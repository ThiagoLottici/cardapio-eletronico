import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidosToConfirm from './ListItemCardapio';

class Comanda extends Component {

  createDataSource({ comanda }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(comanda.pedidos);
  }

  renderRow(pedido) {
    return (
      <ListItemPedidosToConfirm
        pedido={pedido}
        />
      );
  }

  render() {
    return (
        <ListView
         enableEmptySections
         dataSource={this.dataSource}
         renderRow={this.renderRow}
         />
      );
  }
}

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps)(Comanda);
