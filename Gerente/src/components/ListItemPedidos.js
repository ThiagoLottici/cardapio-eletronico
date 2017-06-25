import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class ListItemPedidos extends Component {
  
  componentWillMount() {
    this.props;
  }

  onRowPress() {
    Actions.itemPedidos({ Item: this.props.Item });
  }

  render() {
    debugger;
    const Item = this.props.Item;
    const Entrada = Item.DataEntrada;
    const IndexT = Entrada.indexOf("T");
    const HoraEntrada = Entrada.substring(IndexT + 1, IndexT + 3 ) + 'h';
    const MinEntrada = Entrada.substring(IndexT + 3, IndexT + 6) + 'min';
    const comandaLabel = `Comanda#${Item.Id}`;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.pedidosNaoConfirmadosStyle}>
          <View style={{ flexDirection: 'column', flex: 0.5, paddingLeft: 5 }}>
              <Text>
                {comandaLabel}
              </Text>
              <Text style={{ paddingTop: 10 }}>
                Nro. Mesa: {Item.Mesa}
              </Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 0.5 }}>
              <Text>
                Entrada: { HoraEntrada }{MinEntrada} 
              </Text>
              <Text style={{ paddingTop: 10, color: 'green' }}>
                TOTAL: R$ 10,00
              </Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
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
    position: 'relative',
    flex: 1
  }
};

export default ListItemPedidos;
