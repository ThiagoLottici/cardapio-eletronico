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
    const { Nome, Ingredientes } = this.props.Item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.cardapioStyle}>
            <Text style={styles.titleStyle}>
              { Nome }
            </Text>
            <Text>
              { Ingredientes }
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  cardapioStyle: {
    flexDirection: 'column'
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(ListItemCardapio);
