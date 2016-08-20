/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, Text, View, StyleSheet, Dimensions, TouchableHighlight, TouchableNativeFeedback} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'

import Drawer from 'react-native-drawer'
import ControlPanel from './../Navigation/controlPanel'

let {height} = Dimensions.get('window');
let drawerHandlerPtr,petSelectionContext;
class PetSelection extends Component{
	constructor(props){
		super(props);
		this.state = {
			drawerOpen: false
		};
		drawerHandlerPtr = this._handleDrawer;
		petSelectionContext = this;
	}
	_handleDrawer(){
		if(this.state.drawerOpen){
			this.setState({drawerOpen:false});
		}else{
			this.setState({drawerOpen:true});
		}
	}
	render(){
		return(
			<Drawer
				open={this.state.drawerOpen}
				onOpen={()=>{this.setState({drawerOpen:true})}}
				onClose={()=>{this.setState({drawerOpen:false})}}
				type="static"
				content={<ControlPanel user={this.props.user}/>}
				tapToClose={true}
				openDrawerOffset={0.2} // 20% gap on the right side of drawer
				panCloseMask={0.2}
				closedDrawerOffset={-3}
				styles={drawerStyles}
				tweenHandler={Drawer.tweenPresets.parallax}>
				
				<ScrollView style={{backgroundColor:'#424242', marginTop:60,height:height}}>
					
					<Button onPress={()=>{console.log('Pressedme')}}>
						<Text>WTF</Text>
					</Button>
				</ScrollView>
			</Drawer>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return(
		<TouchableHighlight
			underlayColor="transparent"
			style={styles.button}
			onPress={drawerHandlerPtr.bind(petSelectionContext)}>
			<Icon name="bars" size={30} color="white"></Icon>
		</TouchableHighlight>
	)
}
function rightButtonFunc(route, navigator, index, navState) {
	return <Icon name="plus" size={30} color="white"></Icon>
}

const drawerStyles = {
	drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
};
const styles = StyleSheet.create({
	button:{
		backgroundColor: 'transparent',
	}
});

let petSelectionRoute = new Route(0,'Pet Selection','petSelection', <PetSelection />,leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};
