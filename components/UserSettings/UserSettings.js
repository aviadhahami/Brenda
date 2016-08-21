/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
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
	_shrinkDisplayName(name){
		let newName = name;
		if(newName.length>20){
			newName = newName.substr(0,17) + '...'
		}
		return newName;
	}
	render(){
		let displayName = this._shrinkDisplayName(this.props.user.displayName);
		
		return(
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.photoContainer}>
				
				</View>
				<View style={styles.displayNameContainer}>
					<Text style={styles.displayNameText}>{displayName}</Text>
				</View>
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
		flex:1,
		alignItems:'center'
	},
	photoContainer:{
		width:200,
		height:200,
		borderRadius:100,
		backgroundColor:'green'
	},
	displayNameContainer:{
		flex:1,
		flexDirection:'row',
		height:100,
		
	},
	displayNameText:{
		color: 'rgba(255,255,255,0.9)',
		fontSize:30,
	},
});

let userSettingsRoute = new Route(2,'Settings','userSettings', <UserSettings />,leftButtonFunc, rightButtonFunc);
export {userSettingsRoute};
