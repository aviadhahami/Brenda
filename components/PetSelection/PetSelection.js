/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'

import Drawer from 'react-native-drawer'
import ControlPanel from './../Navigation/controlPanel'

let {height} = Dimensions.get('window');
class PetSelection extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Drawer
				type="static"
				content={<ControlPanel />}
				openDrawerOffset={100}
				styles={drawerStyles}
				tweenHandler={Drawer.tweenPresets.parallax}>
				
				<ScrollView style={{backgroundColor:'#424242', marginTop:60,height:height}}>
					<Text>PetSelection</Text>
				</ScrollView>
				
			</Drawer>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	let that = this;
	return (
	<TouchableHighlight onPress={that._drawer.open.bind(this)}>
		<Icon name="bars" size={30} color="white"></Icon>
	</TouchableHighlight>
)
}
function rightButtonFunc(route, navigator, index, navState) {
	return <Icon name="plus" size={30} color="white"></Icon>
}
const styles = StyleSheet.create({
	navBarStyle:{
		backgroundColor:'green'
	}
});

const drawerStyles = {
	drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
};

let petSelectionRoute = new Route(0,'Pet Selection','petSelection', <PetSelection />,leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};
