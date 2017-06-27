import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItemCardapio extends Component {

  onRowPress() {
    Actions.dishDetail({ Item: this.props.Item });
  }


  render() {
    const { Nome, Ingredientes, Descricao } = this.props.Item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={{ flexDirection: 'row' }}>
          <CardSection style={styles.cardapioStyle}>
            <View style={{ flexDirection: 'column', flex: 5 }}>
            <View accessible accessibilityLabel={'Nome' + this.props.Item.Nome + ' Ingredientes' + this.props.Item.Ingredientes}>
              <Text style={styles.titleStyle}>
                { Nome }
              </Text>
            </View>
            <View style={styles.ingredientesStyle}>
                <Text>
                  { Descricao }
                </Text>
            </View>
            </View>
             <View style={{ flex: 1, paddingTop: 15 }} accessible accessibilityLabel={'Valor' + this.props.Item.Preco}>
                <Text style={{ color: 'green' }}>
                  R$ {this.props.Item.Preco}
                </Text>
             </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  cardapioStyle: {
    flex: 3
  },
  ingredientesStyle: {
    paddingLeft: 10
  }
};

const mapStateToProps = (state) => {
  //console.log(state);
  return state;
};

export default connect(mapStateToProps)(ListItemCardapio);
