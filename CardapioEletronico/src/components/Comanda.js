import React, { Component } from 'react';
import { ListView, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidosToConfirm from './ListItemPedidosToConfirm';

class Comanda extends Component {

  componentWillMount() {
    //fetchComanda
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ comanda }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(comanda.comanda);
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
      <View>
        <Text>
        Pedidos não confirmados:
        </Text>
        <View>
            <ListView
               enableEmptySections
               dataSource={this.dataSource}
               renderRow={this.renderRow}
            />
         </View>
      </View>
      );
  }
}

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps)(Comanda);
