import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { onCheckboxChange } from '../actions';

class ListItemItemPedidos extends Component {

  componentWillMount() {
    debugger;
  this.props;
}

  render() {
    const Item = this.props.ItemPedido;
    return (
        <View style={styles.pedidosNaoConfirmadosStyle} accessible accessibilityLabel={Item.Nome}>
         <View style={{ flex: 8 }}>
            <Text>
              {Item.Nome}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ color: 'green' }}>
              R$ {Item.Preco}
            </Text>
          </View>
        </View>
      );
  }
}

const styles = {
  pedidosNaoConfirmadosStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const mapStateToProps = state => {
  return state.pedidos;
};

export default connect(mapStateToProps, { onCheckboxChange })(ListItemItemPedidos);
