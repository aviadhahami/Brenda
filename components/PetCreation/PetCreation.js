/**
 * Created by aviad on 8/20/2016.
 */
import React, { Component } from 'react';
import Route from './../Navigation/Route'
import {Text,View, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

let navigator;
class PetCreation extends Component{
	constructor(props){
		super(props);
		navigator = this.props.navigator;
	}
	render(){
		return(
			<View>
				<Text>Pet Creation</Text>
			</View>
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
