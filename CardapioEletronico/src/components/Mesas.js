import React, { Component } from 'react';
import { ListView, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { mesasFetch } from '../actions';

class Mesas extends Component {
  componentWillMount() {
    this.props.mesasFetch();
  }

  componentWillReceiveProps(nextProps) {
    renderPickerItem(nextProps.mesas);
  }

  renderPickerItem(mesas) {
      this.mesasPickerItens = mesas.map( (s, i) => {
        return <Picker.Item key={i} value ={s} label={s} />
    });
  }

  onSelecionarMesaButtonPress() {
    this.props.selecionarMesaPost(this.props.mesaNum);
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.props.mesaNum}
          onValueChange={(mesaNum) => this.props.onMesaNumChange({ mesaNum: mesaNum })}>
          {this.mesasPickerItens}
        </Picker>
        <Button 
          title="Selecionar Mesa"
          onPress={this.onSelecionarMesaButtonPress.bind(this)}
        />
      </View>
      );
  }
}

const mapStateToProps = (state) => {
  return { mesas: state.mesas };
};

export default connect(mapStateToProps, { mesasFetch, onMesaNumChange, selecionarMesaPost })(Mesas);
