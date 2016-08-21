/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'


let {height} = Dimensions.get('window');

class UserSettings extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ScrollView style={{backgroundColor:'rgba(0,0,0,0)', marginTop:height*0.1,height:height}}>
				<Button onPress={()=>{console.log('Pressed me')}}>
					<Text>User settings</Text>
				</Button>
			</ScrollView>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return null;
}
function rightButtonFunc(route, navigator, index, navState) {
	return null;
}

const styles = StyleSheet.create({
	button:{
		backgroundColor: 'transparent',
	}
});

let userSettingsRoute = new Route(2,'Settings','userSettings', <UserSettings />,leftButtonFunc, rightButtonFunc);
export {userSettingsRoute};
