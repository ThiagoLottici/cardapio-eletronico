import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { dishDetails, registrarPratoComanda } from '../actions';
import { Actions } from 'react-native-router-flux';

class DishDetail extends Component {
    
    componentWillMount() {
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decrementCount = () => {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    onEnviarParaComandaButtonPress() {
      this.props.prato.Observation = this.props.observation;
      this.props.prato.Quantity = this.props.count;
      this.props.registrarPratoComanda(this.props.prato);
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
              value={this.props.observation}
              onChangeText={value => this.props.dishDetails({ prop: 'observation', value })}
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
              {this.state.count}
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

export default connect(null, { dishDetails, registrarPratoComanda })(DishDetail);
