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
			console.log('route', route);
			console.log('navigator', navigator);
			return route.component
	}
	render(){
		return(
			<Navigator
				initialRoute={componentsConfig.getInitialComponent}
				renderScene={this._sceneLogic.bind(this)}
				style={{padding: 100}}
			/>
		)
	}
}

export default NavigationContainer