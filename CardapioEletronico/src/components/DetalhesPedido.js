import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { registrarItemPedidoComanda } from '../actions';
import { Actions } from 'react-native-router-flux';

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
          <Text>
            Observações
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
            <Button 
            title="+"
            onPress={() => this.incrementCount()}
            />
            <Text>
              {this.state.ItemPedido.Quantidade}
            </Text>
            <Button 
            title="-"
            onPress={() => this.decrementCount()}
            />
            <Button 
            title="Enviar pedido para comanda"
            onPress={this.onEnviarParaComandaButtonPress.bind(this)}
            />
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
