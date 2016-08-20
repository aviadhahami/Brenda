/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'
import {PetCreationRoute} from './../PetCreation/PetCreation'


let {height} = Dimensions.get('window');

class PetSelection extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ScrollView style={{backgroundColor:'#424242', marginTop:60,height:height}}>
				<Button onPress={()=>{console.log('Pressed me')}}>
					<Text>WTF</Text>
				</Button>
			</ScrollView>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return null;
}
function rightButtonFunc(route, navigator, index, navState) {
	return <TouchableHighlight onPress={()=>{navigator.push(PetCreationRoute)}}><Icon name="plus" size={30} color="white"></Icon></TouchableHighlight>
}

const styles = StyleSheet.create({
	button:{
		backgroundColor: 'transparent',
	}
});

let petSelectionRoute = new Route(0,'Pet Selection','petSelection', <PetSelection />,leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};
