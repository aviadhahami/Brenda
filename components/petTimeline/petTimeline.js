/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome';

import PetsAPI from './../../stores/APIs/PetsAPI'

let { height, width } = Dimensions.get('window');

class PetTimeline extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		PetsAPI.pets.getCurrentPet(this.updatePetData.bind(this))
	}
	
	updatePetData(pet) {
		this.setState({ pet });
	}
	
	render() {
		alert('timeline');
		return (
				<LinearGradient colors={gradientColor} style={styles.gradient}>
					<Text>try</Text>
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
	gradient: {
		flex: 1
	},
});

let petTimelineRoute = new Route(3, 'Pet Timeline', 'petTimeline', <PetTimeline />, leftButtonFunc, rightButtonFunc);
export { petTimelineRoute };
