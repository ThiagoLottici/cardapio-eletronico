import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { registrarItemPedidoComanda } from '../actions';
import { Actions } from 'react-native-router-flux';
import { DecreaseButton, IncreaseButton, ConfirmButton, EnviarPedidoButton } from './common';

class DetalhesPedido extends Component {

    constructor(props) {
      super(props);
      this.state = { ItemPedido: '' };
      this.state.ItemPedido = { Item: props.Item, Obs: '', Quantidade: 1 };
    }

    onEnviarParaComandaButtonPress() {
      this.props.registrarItemPedidoComanda(this.state.ItemPedido);
      Actions.cardapio({ pedidoEnviadoParaComanda: true });
    }

    incrementCount = () => {
      this.setState(prevState => 
        ({ ItemPedido: { ...this.state.ItemPedido, Quantidade: prevState.ItemPedido.Quantidade + 1 } }));
    }

    decrementCount = () => {
      this.setState(prevState => 
        ({ ItemPedido: { ...this.state.ItemPedido, Quantidade: prevState.ItemPedido.Quantidade - 1 } }));
    }
    

    render() {
      return (
        <View>
          <View>
          <Text style={{ fontWeight: 'bold', fontSize: 24, paddingLeft: 5 }}>
            {this.state.ItemPedido.Item.Nome}
          </Text>
            <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
              {this.state.ItemPedido.Item.Ingredientes}
            </Text>
          </View>
          <View>
          <Text style={{ paddingTop: 20, paddingLeft: 5 }}>
            Alguma observação do seu pedido?
          </Text>
            <TextInput
              multiline
              numberOfLines={4}
              value={this.state.ItemPedido.Obs}
              onChangeText={value => 
                this.setState({ ItemPedido: { ...this.state.ItemPedido, Obs: value } })}
              style={styles.textInputStyle}
              />
          </View>
              <View>
                <Text>
                  Quantidade
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
                  <View style={{ paddingTop: 5 }}>
                      <DecreaseButton 
                      style={{ paddingTop: 10 }}
                      onPress={() => this.decrementCount()}
                      >
                      -
                      </DecreaseButton>
                  </View>
                      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                        {this.state.ItemPedido.Quantidade}
                      </Text>
                      <View style={{ paddingTop: 10 }}>
                          <IncreaseButton 
                          onPress={() => this.incrementCount()}
                          >
                          +
                          </IncreaseButton>
                      </View>
                  </View>
                  <View style={{ paddingTop: 20 }}>
                  <EnviarPedidoButton
                  onPress={this.onEnviarParaComandaButtonPress.bind(this)}
                  >
                  Enviar pedido para comanda
                  </EnviarPedidoButton>
                  </View>
              </View>
          </View>
          );
      }
}


const styles = {
  textInputStyle: {
      padding: 4,
      marginRight: 1, 
      marginTop: 5,
      fontSize: 18, 
      borderWidth: 1, 
      borderRadius: 4, 
      borderColor: '#E6E5ED', 
      backgroundColor: '#F8F8F9', 
      justifyContent: 'flex-start', 
      height: 150, 
      textAlignVertical: 'top'
}
     };

export default connect(null, { registrarItemPedidoComanda })(DetalhesPedido);
