import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import axios from 'axios';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    console.log(this.props.prato.Id);
    axios.post('https://cardapioteste.herokuapp.com/', {
        id: this.props.prato.Id
    })
    .then( response => {/
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    });
  }

  render() {
    const { Name, Ingredientes} = this.props.prato;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.cardapioStyle}>
            <Text style={styles.titleStyle}>
              {Name}
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

export default ListItem;
