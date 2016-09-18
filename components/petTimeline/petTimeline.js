/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {
		ScrollView,
		View,
		Text,
		StyleSheet,
		Dimensions,
		TouchableHighlight,
		Image
} from 'react-native'
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
				<LinearGradient colors={gradientColor} style={styles.container}>
					<View style={styles.titleContainer}>
						<Image  style={styles.titleImage} source={require('./../../assets/stubs/brenda.png')}>
							<Text style={styles.title}>{this.state.pet.name}</Text>
						</Image>
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
const gradientColor = ['rgba(255,255,255,1)','rgba(255,255,255,0.76)','rgba(103,58,183,0.8)', 'rgba(30,17,54,1)' ];

const styles = StyleSheet.create({
	container: {
		marginTop: 59,
		flexDirection: 'column',
		flex: 1,
	},
	gradient: {
		flex: 1,
	},
	titleContainer: {
		flexDirection: 'row',
		// height: HEIGHT * 0.2,
		width: WIDTH,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'rgba(255,255,255,0.85)',
		fontSize: 90,
		fontWeight: '100',
	},
	titleImage:{
		resizeMode:'cover',
		height:HEIGHT*0.2,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

const petTimelineRoute = new Route(3, 'Pet Timeline', 'petTimeline', <PetTimeline />, leftButtonFunc, rightButtonFunc);
export { petTimelineRoute };
