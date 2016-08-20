/**
 * Created by aviad on 8/13/2016.
 */

import React, {Component} from 'react'
import {Text, View, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ControlPanel extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ScrollView style={styles.controlPanel}>
				<View style={styles.row}>
					<Icon style={styles.controlPanelIcon} name="paw" size={30} color="black"></Icon>
					<Text style={styles.controlPanelText}>Pets Menu</Text>
				</View>
				<View style={styles.row}>
					<Icon style={styles.controlPanelIcon} name="cogs" size={30} color="black"></Icon>
					<Text style={styles.controlPanelText}>User Settings</Text>
				</View>
				<View style={styles.row}>
					<Icon style={styles.controlPanelIcon} name="sign-out" size={30} color="black"></Icon>
					<Text style={styles.controlPanelText}>Logout</Text>
				</View>
			</ScrollView>
		)
	}
	
}

const styles = StyleSheet.create({
	controlPanel: {
		marginTop:60,
		width:300,
		flex: 1,
		// justifyContent:'flex-end',
		backgroundColor:'rgba(255,255,255,0.85)',
	},
	row:{
		flexDirection:'row',
		borderBottomWidth:1,
		borderColor:'rgba(0,0,0,0.3)',
		height:65,
	},
	controlPanelIcon:{
		marginTop:15,
		marginLeft:10,
		lineHeight:10
	},
	controlPanelText: {
		color:'rgba(0,0,0,0.9)',
		fontSize: 20,
		marginLeft: 20,
		marginTop:20,
		borderWidth:1,
		borderColor:'rgba(255, 255, 0, 1)',
		fontWeight:'bold',
	},
});

export default ControlPanel