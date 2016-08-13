/**
 * Created by aviad on 8/8/2016.
 */

import React, { Component } from 'react'
import {
	View,
	Text,
	Navigator,
	StyleSheet} from 'react-native'
import componentsConfig from './componentsConfig'

class NavigationContainer extends Component{
	
	constructor(props){
		super(props)
	}
	_sceneLogic(route, navigator){
		return route.component
	}
	get _navigationBar(){
		return 	<Navigator.NavigationBar
			routeMapper={{
				LeftButton: this._leftNavButton.bind(this),
				RightButton: this._rightNavButtonConfig.bind(this),
				Title: this._titleNavConfig.bind(this)
			}}
			style={styles.navigationBar}
		/>
	}
	_titleNavConfig(route, navigator, index, navState){
		console.log(route);
		return <Text style={styles.navTitle}>{route.title}</Text>
	}
	_leftNavButton(route, navigator, index, navState){
		return <Text style={styles.leftNavButton}>Left</Text>
	}
	_rightNavButtonConfig(route, navigator, index, navState){
		return <Text style={styles.rightNavButton}>Right</Text>
	}
	
	render(){
		return(
			<Navigator
				initialRoute={componentsConfig.getInitialComponent}
				initialRouteStack={componentsConfig.getComponents}
				renderScene={this._sceneLogic.bind(this)}
				navigationBar={this._navigationBar}
			/>
		)
	}
}

const styles= StyleSheet.create({
	navigationBar:{
		backgroundColor: '#D81B60',
		height: 60,
		shadowColor: 'black',
		shadowOpacity: 1.0,
		elevation:8,
		borderBottomLeftRadius:2,
		borderBottomRightRadius:2
	},
	leftNavButton:{
		width:50,
		backgroundColor:'blue'
	},
	rightNavButton:{
		width:50,
		backgroundColor:'yellow'
	},
	navTitle:{
		margin:10,
		fontWeight:'400',
		fontSize:24,
		color:'white',
		width:200,
		backgroundColor:'black',
		textAlign:'center'
	}
});
export default NavigationContainer