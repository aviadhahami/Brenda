/**
 * Created by aviad on 8/8/2016.
 */

import React, { Component } from 'react'
import {
	View,
	Text,
	Navigator} from 'react-native'
import componentsConfig from './componentsConfig'

class NavigationContainer extends Component{
	
	constructor(props){
		super(props)
	}
	_sceneLogic(route, navigator){
		console.log(navigator);
		return route.component
	}
	get _navigationBar(){
		return 	<Navigator.NavigationBar
			routeMapper={{
				LeftButton: this._leftNavButton.bind(this),
				RightButton: this._rightNavButtonConfig.bind(this),
				Title: this._titleNavConfig.bind(this)
			}}
			style={{backgroundColor: 'purple'}}
		/>
	}
	_titleNavConfig(route, navigator, index, navState){
		return <Text style={{color:'white', textAlign:'center'}}>{route.title}</Text>
	}
	_leftNavButton(route, navigator, index, navState){
		return <Text>Left</Text>
	}
	_rightNavButtonConfig(route, navigator, index, navState){
		return <Text>Right</Text>
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

export default NavigationContainer