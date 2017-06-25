import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { removeItem } from '../actions';
import { DeleteButton } from './common';

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
        <View style={styles.pedidosNaoConfirmadosStyle} accessible accessibilityLabel={Item.Nome}>
            <View style={{ flex: 7 }}>
                <Text>
                  {Item.Nome}
                </Text>
            </View>
            <View style={{ flex: 2 }}>
                <Text>
                  R$ {Item.Preco}
                </Text>
            </View>
          <View style={{ flex: 1 }} accessible accessibilityLabel={'Clique para deletar o pedido'}>
              <DeleteButton
                onPress={this.removeItem.bind(this)}
                title="X"
                color="red"
                accessibilityLabel="Deletar pedido"
                style={styles.buttonStyle}
                >
                X
                </DeleteButton>
            </View>
        </View>
      );
  }
}

const styles = {
  pedidosNaoConfirmadosStyle: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 3,
    paddingLeft: 10,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
};

const mapStateToProps = (state) => {
  return { comanda: state.comanda };
};

export default connect(mapStateToProps, { removeItem })(ListItemPedidosToConfirm);
