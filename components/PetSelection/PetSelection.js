/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'


class PetSelection extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={{backgroundColor:'#424242', marginTop:60,height:300}}>
				<Text>PetSelection</Text>
			</View>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return <Icon name="bars" size={30} color="white"></Icon>
}
function rightButtonFunc(route, navigator, index, navState) {
	return <Icon name="plus" size={30} color="white"></Icon>
}
let petSelectionRoute = new Route(0,'Pet Selection','petSelection', <PetSelection />,leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};

