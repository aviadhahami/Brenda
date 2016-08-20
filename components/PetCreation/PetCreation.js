/**
 * Created by aviad on 8/20/2016.
 */
import React, { Component } from 'react';
import Route from './../Navigation/Route'
import {Text,View, TouchableHighlight, ScrollView, Dimensions} from 'react-native'
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
let {height} = Dimensions.get('window');

class PetCreation extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			
			<ScrollView style={{backgroundColor:'#4242', marginTop:60,height:height}}>
				<Button onPress={()=>{console.log('Pressed me')}}>
					<Text>New screen</Text>
				</Button>
			</ScrollView>
		)
	}
}

function leftButtonFunc(route, navigator, index, navState) {
	return <TouchableHighlight underlayColor={'transparent'} onPress={()=>{navigator.pop()}}><Icon name="chevron-left" color="white" size={30}></Icon></TouchableHighlight>
}
function rightButtonFunc(route, navigator, index, navState) {
	{/*return <TouchableHighlight><Icon name="plus" size={30} color="white"></Icon></TouchableHighlight>*/}
	return;
}


let PetCreationRoute = new Route(1,'Pet Creation','petCreation', <PetCreation />,leftButtonFunc, rightButtonFunc);
export {PetCreationRoute};
