/**
 * Created by aviad on 8/8/2016.
 */

import React, { Component } from 'react'
import {
	View,
	Text,
	Navigator,
	StyleSheet,
	TouchableHighlight} from 'react-native'
import {Button} from 'apsl-react-native-button'
import componentsConfig from './componentsConfig'

import Icon from 'react-native-vector-icons/FontAwesome'
import Drawer from 'react-native-drawer'
import ControlPanel from './../Navigation/controlPanel'



class NavigationContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			drawerOpen: false
		};
	}
	_handleDrawer(){
		// alert(`drawer is now ${this.state.drawerOpen?'open, will close':'closed, will open'}`)
		if(this.state.drawerOpen){
			this.setState({drawerOpen:false});
		}else{
			this.setState({drawerOpen:true});
		}
	}
	_generateDrawer(component){
		return (<Drawer
			open={this.state.drawerOpen}
			type="static"
			onOpen={()=> {
				this.setState({drawerOpen: true})
			}}
			onClose={()=> {
				this.setState({drawerOpen: false})
			}}
			content={<ControlPanel user={this.props.user} navigator={this.props.navigator}/>}
			tapToClose={true}
			openDrawerOffset={0.2} // 20% gap on the right side of drawer
			panCloseMask={0.2}
			closedDrawerOffset={-3}
			styles={drawerStyles}
			tweenHandler={Drawer.tweenPresets.parallax}>
			{component}
		</Drawer>)
	}
	_sceneLogic(route, navigator){
		// return route.component
		let boundedRoute = React.cloneElement(route.component,{user:this.props.user, navigator:navigator});
		if(route.name == 'petCreation') {
			return boundedRoute
		}else{
			return this._generateDrawer(boundedRoute);
		}
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
		return (
			<View style={styles.navTitleContainer}>
				<Text style={styles.navTitle}>{route.title}</Text>
			</View>
		)
	}
	_leftNavButton(route, navigator, index, navState){
		
		let defaultButton = (<TouchableHighlight
			underlayColor="transparent"
			style={styles.button}
			onPress={this._handleDrawer.bind(this)}>
			<Icon name="bars" size={30} color="white"></Icon>
		</TouchableHighlight>);
		let routeGeneratedButton = route.generateLeftButton(route, navigator, index, navState);
		return <View style={styles.navButtonContainer}>{routeGeneratedButton == null ? defaultButton : routeGeneratedButton}</View>
	}
	_rightNavButtonConfig(route, navigator, index, navState){
		return <View style={styles.navButtonContainer}>{route.generateRightButton(route, navigator, index, navState)}</View>
	}
	
	render(){
		return(
			<Navigator
				initialRoute={componentsConfig.getInitialComponent}
				initialRouteStack={componentsConfig.getComponents}
				renderScene={this._sceneLogic.bind(this)}
				navigationBar={this._navigationBar}
				configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
			/>
		)
	}
}
// {/*configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}*/}


const drawerStyles = {
	drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
};
const styles= StyleSheet.create({
	navigationBar:{
		flex:1,
		// flexDirection:'row',
		padding:0,
		backgroundColor: 'rgba(216, 27, 96, 1)',
		height: 61,
		shadowColor: 'black',
		shadowOpacity: 1.0,
		elevation:8,
		borderBottomLeftRadius:2,
		borderBottomRightRadius:2
	},
	leftNavButton:{
		color:'white'
	},
	rightNavButton:{
		color:'white',
	},
	navButtonContainer:{
		flex:1,
		width:50,
		alignItems:'center',
		justifyContent:'center'
	},
	navTitleContainer:{
		flex:1,
		flexDirection:'row',
		width:220,
		justifyContent: 'center',
		// alignItems: 'center',
		marginTop:5,
	},
	navTitle:{
		textAlign:'center',
		fontWeight:'400',
		fontSize:26,
		color:'white',
	}
});
export default NavigationContainer