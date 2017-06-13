import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItemPedidos from './ListItemPedidos';
import { pedidosFetch } from '../actions';

class Pedidos extends Component {
  componentWillMount() {
    this.props.pedidosFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ pedidos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(pedidos.pedidos);
  }

    renderRow(Item) {
    return (
      <ListItemPedidos
        Item={Item}
      />
    );
  }

  render() { 
  return ( 
    <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
    );
  }
}

const mapStateToProps = (state) => {
  return { pedidos: state.pedidos };
};


export default connect(mapStateToProps, { pedidosFetch })(Pedidos);
