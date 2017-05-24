import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ListItemPedidosToConfirm extends Component {

  render() {
    return (
        <View>
          <Text>
            {this.props.pedido.Name}
          </Text>
        </View>
      );
  }
}
