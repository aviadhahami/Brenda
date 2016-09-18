/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import { ScrollView, View, ListView, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'
import { PetCreationRoute } from './../PetCreation/PetCreation'


import LinearGradient from 'react-native-linear-gradient'
const { height:HEIGHT } = Dimensions.get('window');


import petsStore from './../../stores/PetsStore'; // Important to keep

import PetsAPI from './../../stores/APIs/PetsAPI'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class PetSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pets: [],
			dataSource: ds.cloneWithRows([]),
		};
	}
	
	componentDidMount() {
		PetsAPI.pets.retrievePets(this.props.user.uid, this.petsStateListener.bind(this));
	}
	
	petsStateListener(promise) {
		promise.then(data=> {
			PetsAPI.pets.retrievePetsInfo(data, this.petsInfoListener.bind(this));
		});
	}
	
	petsInfoListener(data) {
		const petsArray = this.state.pets;
		petsArray.push(data);
		this.setState({ pets: petsArray, dataSource: ds.cloneWithRows(petsArray) });
	}
	
	render() {
		console.log(this.state);
		return (
				<LinearGradient colors={gradientColor} style={styles.gradient}>
					<ListView style={{ backgroundColor: 'rgba(0,0,0,0)', marginTop: HEIGHT * 0.1, height: HEIGHT }}
										contentContainerStyle={styles.list}
										dataSource={this.state.dataSource}
										renderRow={(rowData) => <CircleNameButton style={styles.item} data={rowData}/>}>
					</ListView>
				</LinearGradient>
		)
	}
	
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return null;
}
function rightButtonFunc(route, navigator, index, navState) {
	return <TouchableHighlight underlayColor={'transparent'} onPress={()=> {
		navigator.push(PetCreationRoute)
	}}><Icon name="plus" size={30} color="white"></Icon></TouchableHighlight>
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'transparent',
	},
	gradient: {
		flex: 1
	},
	list: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	item: {
		// backgroundColor: '#CCC',
		margin: 10,
		width: 100,
		height: 100
	}
});
const gradientColor = ['#673AB7', '#673AB7', '#673AB7', 'black'];

let petSelectionRoute = new Route(0, 'My Pets', 'petSelection', <PetSelection />, leftButtonFunc, rightButtonFunc);
export { petSelectionRoute };

class CircleNameButton extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const { name } = this.props.data;
		let fullName = name.charAt(0).toUpperCase();
		if ( name ) {
			if ( name.length > 7 ) {
				fullName += name.substring(1, 5).toLowerCase() + '..'
			} else {
				fullName += name.substring(1).toLowerCase()
			}
		}
		return (
				<View style={circleStyles.circle}>
					<TouchableHighlight>
						<View>
							<Text style={circleStyles.bigLetter}>
								{this.props.data.name.charAt(0).toUpperCase()}
							</Text>
							<Text style={circleStyles.fullName}>
								{fullName}
							</Text>
						</View>
					</TouchableHighlight>
				</View>
		)
	}
}


const circleStyles = StyleSheet.create({
	container: {},
	circle: {
		width: 100,
		height: 100,
		margin: 10,
		borderRadius: 500,
		borderWidth: 5,
		borderColor: 'rgba(255,255,255,1)'
	},
	bigLetter: {
		// height:50,
		fontSize: 50,
		fontWeight: "800",
		color: 'white',
		alignSelf: 'center'
	},
	fullName: {
		marginTop: -5,
		color: 'white',
		alignSelf: 'center'
	}
});
