import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItemCardapio extends Component {

  onRowPress() {
    /*console.log(this.props.prato.Id);
    axios.post('https://cardapioteste.herokuapp.com/', {
        id: this.props.prato.Id
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });*/
    //this.setState({ showModal: !this.state.showModal });
    Actions.dishDetail({ prato: this.props.prato });
  }


  render() {
    const { Name, Ingredientes } = this.props.prato;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.cardapioStyle}>
            <Text style={styles.titleStyle}>
              { Name }
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
