/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, Text, StyleSheet, Dimensions} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'

import navBarGlobalStyle from './../../stores/navBarGlobalStyle'

let {height} = Dimensions.get('window');
class PetSelection extends Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		navBarGlobalStyle.set(styles.navBarStyle);
	}
	render(){
		return(
			<ScrollView style={{backgroundColor:'#424242', marginTop:60,height:height}}>
				<Text>PetSelection</Text>
			</ScrollView>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return <Icon name="bars" size={30} color="white"></Icon>
}
function rightButtonFunc(route, navigator, index, navState) {
	return <Icon name="plus" size={30} color="white"></Icon>
}
const styles = StyleSheet.create({
	navBarStyle:{
		backgroundColor:'black'
	}
});
let petSelectionRoute = new Route(0,'Pet Selection','petSelection', <PetSelection />,leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};

