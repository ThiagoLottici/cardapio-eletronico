import React, { Component } from 'react';
import { ListView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidos from './ListItemPedidos';
import { pedidosFetch, criaSocket, setFalseMessageBar } from '../actions';
import { Spinner } from './common';
const MessageBarAlert = require('react-native-message-bar').MessageBar;
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

class Pedidos extends Component {

  componentWillMount() {
    if (this.props.pedidos.firstConnection) {
    this.props.criaSocket();
    this.props.pedidosFetch();
  }
    this.createDataSource(this.props);
    this.showConfirmMessage();
  }

  showConfirmMessage() {
        if (this.props.pedidos.messageBarPedidoFinalizado) {
        MessageBarManager.showAlert({
        message: "Pedido finalizado com sucesso",
        alertType: 'success'
    });
        this.props.setFalseMessageBar();
      }
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

    componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
     this.showConfirmMessage();
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
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
    this.props.pedidosFetch();
  }

  renderHaPedidosNovos() {
    if (this.props.pedidos.temPedidosNovos) {
    return (
    <TouchableWithoutFeedback style={styles.buttonStyle} onPress={this.atualizaPedidos.bind(this)}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          Há pedidos novos, clique aqui para atualizar
        </Text>
      </View>
    </TouchableWithoutFeedback>
      );
    }
  return null;
  }

  render() { 
    if (this.props.pedidos.loading) {
      return <Spinner size="large" />;
    }
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
      <MessageBarAlert ref="alert" />
    </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  buttonStyle: {
    height:30,
    alignSelf: 'stretch',
    backgroundColor: 'orange',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B78521',
    paddingTop: 5
  }
};

const mapStateToProps = (state) => {
  return { pedidos: state.pedidos };
};


export default connect(mapStateToProps, { pedidosFetch, criaSocket, setFalseMessageBar })(Pedidos);
