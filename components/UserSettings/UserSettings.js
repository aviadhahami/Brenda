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
			<ScrollView contentContainerStyle={styles.container} ref="scrollView">
				<View style={styles.content}>
					<View style={styles.photoContainer}>
					
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.userText}>{displayName}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.userMailText}>{this.props.user.email}</Text>
					</View>
					<View style={styles.dividerContainer}>
						<TouchableOpacity style={{alignItems:'center'}}onPress={()=>{
							this.refs.scrollView.scrollTo({y:height*0.9,animated:true});
						}}>
							<Text>Scroll down to edit info</Text>
							<Icon name="chevron-down"></Icon>
						</TouchableOpacity>
					</View>
					<View style={styles.editSectionContainer}>
						<Text>Scroll down to edit info</Text>
						<Icon name="chevron-down"></Icon>
					</View>
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
		backgroundColor:'rgba(255,255,255,0.1)',
	},
	content:{
		marginTop:height*0.1,
		paddingTop:height*0.05,
		alignItems:'center',
		// height:height*2
	},
	photoContainer:{
		width:200,
		height:200,
		borderRadius:100,
		backgroundColor:'green'
	},
	textContainer:{
		flexDirection:'column',
	},
	userText:{
		color: 'rgba(0,0,0,0.65)',
		fontSize:35,
	},
	userMailText:{
		fontSize:20,
		color: 'rgba(0,0,0,0.5)',
	},
	dividerContainer:{
		alignItems:'center',
		width:width,
		marginTop:height*0.25,
		marginBottom:height*0.1
	},
	editSectionContainer:{
		backgroundColor:'blue',
		height:height,
		borderBottomWidth:10,
		borderColor:'yellow'
	}
});

let userSettingsRoute = new Route(2,'Settings','userSettings', <UserSettings />,leftButtonFunc, rightButtonFunc);
export {userSettingsRoute};
