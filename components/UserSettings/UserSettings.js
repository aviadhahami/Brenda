/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'

import API from './../../stores/API'


let {height,width} = Dimensions.get('window');

class UserSettings extends Component{
	constructor(props){
		super(props);
		console.log(this.props.user);
	}
	render(){
		return(
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.photoContainer}>
					
				</View>
				<Text>{`Username: ${this.props.user.displayName}`}</Text>
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
	},
	container:{
		backgroundColor:'rgba(0,0,0,0.4)',
		marginTop:height*0.1,
		paddingTop:height*0.05,
		// height:height,
		// width:width,
		flex:1,
		alignItems:'center'
	},
	photoContainer:{
		width:200,
		height:200,
		borderRadius:100,
		backgroundColor:'green'
	}
});

let userSettingsRoute = new Route(2,'Settings','userSettings', <UserSettings />,leftButtonFunc, rightButtonFunc);
export {userSettingsRoute};
