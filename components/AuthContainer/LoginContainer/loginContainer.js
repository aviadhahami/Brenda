/**
 * Created by aviad on 6/20/2016.
 */

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Divider } from 'react-native-material-design'
import TextField from 'react-native-md-textinput'

class LoginContainer extends Component{

	render(){
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>
						Welcome To Brenda!
					</Text>
				</View>
				<View style={styles.loginContainer}>
					<TextField
						label={'Username'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
					/>
					<TextField
						label={'Password'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						secureTextEntry={true}
					/>
					<Button text='Sign in' raised={true} />
				</View>
				<View style={styles.signup}>
					<Button text='Sign up' raised={true} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#e91e63',
		flexDirection:'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title:{
		color:'white',
		fontSize:20
	},
	loginContainer:{
		width:250,
		height:350
	},
	signup:{
		height:50,

	},
});



export default LoginContainer