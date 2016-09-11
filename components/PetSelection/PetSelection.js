/**
 * Created by aviad on 8/13/2016.
 */


import React, {Component} from 'react'
import {ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'
import {PetCreationRoute} from './../PetCreation/PetCreation'


import Pet from './../../classes/Pet'
import PetsAPI from './../../stores/APIs/PetsAPI'
import PetsStore from './../../stores/PetsStore' // Important! invoking the pet store
import LinearGradient from 'react-native-linear-gradient'

let {height} = Dimensions.get('window');


class PetSelection extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<LinearGradient colors={gradientColor} style={styles.gradient}>
				<ScrollView style={{backgroundColor: 'rgba(0,0,0,0)', marginTop: height * 0.1, height: height}}>
					<Button onPress={()=> {
						console.log('Pressed me')
					}}>
						<Text>WTF</Text>
					</Button>
				</ScrollView>
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
	}
});
const gradientColor = ['#673AB7', '#673AB7', '#673AB7', 'black'];

let petSelectionRoute = new Route(0, 'My Pets', 'petSelection', <PetSelection />, leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};
