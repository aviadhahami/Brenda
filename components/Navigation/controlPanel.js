/**
 * Created by aviad on 8/13/2016.
 */

import React, {Component} from 'react'
import {Text, View, StyleSheet, ScrollView } from 'react-native'

class ControlPanel extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<ScrollView style={styles.controlPanel}>
				<Text style={styles.controlPanelWelcome}>Test1</Text>
				<Text style={styles.controlPanelWelcome}>Test1.2</Text>
				<Text style={styles.controlPanelWelcome}>Test1.2</Text>
				<Text style={styles.controlPanelWelcome}>Test1.2</Text>
				<Text style={styles.controlPanelWelcome}>Test1.2</Text>
				<Text style={styles.controlPanelWelcome}>Test1.2</Text>
				<Text style={styles.controlPanelWelcome}>Test1.2</Text>
				<Text style={styles.controlPanelWelcome}>Test2</Text>
				<Text style={styles.controlPanelWelcome}>Test3</Text>
				<Text style={styles.controlPanelWelcome}>Test4</Text>
				<Text style={styles.controlPanelWelcome}>Test5</Text>
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
	controlPanelText: {
		color:'rgba(0,0,0,0.9)',
	},
	controlPanelWelcome: {
		fontSize: 20,
		// textAlign: 'right',
		margin: 25,
		color:'black',
		fontWeight:'bold',
	},
});

export default ControlPanel