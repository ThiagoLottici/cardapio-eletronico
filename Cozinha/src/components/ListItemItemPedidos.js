import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { onCheckboxChange } from '../actions';

class ListItemItemPedidos extends Component {

  componentWillMount() {
  this.props;
}

  render() {
    const Item = this.props.ItemPedido.Item;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox
          label=''
          checked={this.props.ItemPedido.Checked}
          onChange={() => this.props.onCheckboxChange(this.props.ItemPedido)}
        />
        <View style={{ alignSelf: 'stretch', flex: 1 }}>
            <CardSection>
             <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold' }}>
                {Item.Nome} 
              </Text>
              <Text>
                {this.props.ItemPedido.Obs}
              </Text>
             </View>
            </CardSection>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state.pedidos;
};

export default connect(mapStateToProps, { onCheckboxChange })(ListItemItemPedidos);
