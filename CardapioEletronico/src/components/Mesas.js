import React, { Component } from 'react';
import { View, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import { mesasFetch, selecionarMesaPost, onMesaNumChange } from '../actions';
import { Spinner, CardSection } from './common';

class Mesas extends Component {
  componentWillMount() {
    this.props.mesasFetch();
  }
  componentWillReceiveProps(nextProps) {
    this.renderPickerItem(nextProps.mesas);
  }

  onSelecionarMesaButtonPress() {
    this.props.selecionarMesaPost(this.props.mesas.mesaNum || 1);
  }

  renderPickerItem({ mesas }) {
      this.mesasPickerItens = mesas.map((value) => {
      return (<Picker.Item key={value.NumMesa} value={value.NumMesa} label={value.NumMesa.toString()} />);
      });
  }

  renderButton() {
    if (this.props.mesas.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button 
          title="Selecionar Mesa"
          onPress={this.onSelecionarMesaButtonPress.bind(this)}
        />
      );
  }

  render() {
    return (
      <View>
        <Picker
          style={{ width: 100 }}
          selectedValue={this.props.mesas.mesaNum}
          onValueChange={(mesaNum) => this.props.onMesaNumChange({ mesaNum })}>
          {this.mesasPickerItens}
        </Picker>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
      );
  }
}

const mapStateToProps = (state) => {
  return { mesas: state.mesas };
};

export default connect(mapStateToProps, { mesasFetch, onMesaNumChange, selecionarMesaPost })(Mesas);
