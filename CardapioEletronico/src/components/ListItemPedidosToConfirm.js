import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

class ListItemPedidosToConfirm extends Component {
  
  componentWillMount() {
    debugger;
    console.log(this.props);
  }

  removeItem() {
    debugger;
    this.props.removeItem(this.props.ItemPedido);
  }

  render() {
    console.log(this.props);
    const Item = this.props.ItemPedido.Item;
    return (
        <View style={styles.pedidosNaoConfirmadosStyle}>
          <Text>
            {Item.Nome}
          </Text>
          <Button
            onPress={this.removeItem.bind(this)}
            title="X"
            color="red"
            accessibilityLabel="Deletar pedido"
            />  
        </View>
      );
  }
}

const styles = {
  pedidosNaoConfirmadosStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps, { removeItem })(ListItemPedidosToConfirm);
