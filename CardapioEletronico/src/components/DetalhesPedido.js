import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { registrarPratoComanda } from '../actions';
import { Actions } from 'react-native-router-flux';

class DetalhesPedido extends Component {

    constructor(props) {
      super(props);
      this.state = { pedido: '' };
      this.state.pedido = { prato: props.prato, observacao: '', quantidade: 0 };
    }

    onEnviarParaComandaButtonPress() {
      this.props.registrarPratoComanda(this.state.pedido);
      Actions.cardapio();
    }

    incrementCount = () => {
      this.setState(prevState => 
        ({ pedido: { ...this.state.pedido, quantidade: prevState.pedido.quantidade + 1 } }));
    }

    decrementCount = () => {
      this.setState(prevState => 
        ({ pedido: { ...this.state.pedido, quantidade: prevState.pedido.quantidade - 1 } }));
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
              value={this.state.pedido.observacao}
              onChangeText={value => 
                this.setState({ pedido: { ...this.state.pedido, observacao: value } })}
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
              {this.state.pedido.quantidade}
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

export default connect(null, { registrarPratoComanda })(DetalhesPedido);
