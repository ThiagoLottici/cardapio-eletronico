import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { cardapioFetch } from '../actions';
import ListItemCardapio from './ListItemCardapio';

class Cardapio extends Component { 
	componentWillMount() {
		this.props.cardapioFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ cardapio }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(cardapio.pratos);
	}

	renderRow(prato) {
		console.log(prato);
		return (
			<ListItemCardapio
				prato={prato}
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

const mapStateToProps = state => {
	return { cardapio: state.cardapio };
};

export default connect(mapStateToProps, { cardapioFetch })(Cardapio);

