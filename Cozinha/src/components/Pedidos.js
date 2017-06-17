import React, { Component } from 'react';
import { ListView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidos from './ListItemPedidos';
import { pedidosFetch, criaSocket } from '../actions';

class Pedidos extends Component {
  componentWillMount() {
    this.props.criaSocket();
    this.props.pedidosFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ pedidos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(pedidos.pedidos);
  }

    renderRow(Item) {
    return (
      <ListItemPedidos
        Item={Item}
      />
    );
  }

  atualizaPedidos() {
    
  }

  renderHaPedidosNovos() {
    if (this.props.pedidos.temPedidosNovos) {
    return (
    <TouchableWithoutFeedback onPress={this.atualizaPedidos.bind(this)}>
      <View style={{ height: 30 }}>
        <Text>
          Há pedidos novos, clique aqui para atualizar
        </Text>
      </View>
    </TouchableWithoutFeedback>
      );
    }
  return null;
  }

  render() { 
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
    <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
    </View>
      {this.renderHaPedidosNovos()}
    </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { pedidos: state.pedidos };
};


export default connect(mapStateToProps, { pedidosFetch, criaSocket })(Pedidos);
