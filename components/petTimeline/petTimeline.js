/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome';

import PetsAPI from './../../stores/APIs/PetsAPI'

let { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

class PetTimeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pet: {}
		}
	}
	
	componentWillMount() {
		PetsAPI.pets.getCurrentPet(this.updatePetData.bind(this))
	}
	
	updatePetData(pet) {
		this.setState({ pet });
	}
	
	render() {
		return (
				<LinearGradient colors={gradientColor} style={styles.gradient}>
					<View>
						<Text style={{ color: 'black' }}>{this.state.pet.name}</Text>
					</View>
				</LinearGradient>
		)
	}
}

function leftButtonFunc(route, navigator, index, navState) {
	return <TouchableHighlight underlayColor={'transparent'} onPress={()=> {
		navigator.pop()
	}}><Icon name="chevron-left" color="white" size={30}></Icon></TouchableHighlight>;
}
function rightButtonFunc(route, navigator, index, navState) {
	return null;
}
const gradientColor = ['#673AB7', '#673AB7', '#673AB7', 'black'];

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	gradient: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		flex: 1,
		width: 300
	}
});

const petTimelineRoute = new Route(3, 'Pet Timeline', 'petTimeline', <PetTimeline />, leftButtonFunc, rightButtonFunc);
export { petTimelineRoute };
