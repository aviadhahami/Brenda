/**
 * Created by aviad on 6/22/2016.
 */

import React, {Component} from 'react'
import {ScrollView,
	View,
	Text,
	StyleSheet,} from 'react-native'

import { Button } from 'react-native-material-design'
import TextField from 'react-native-md-textinput'


class SignUp extends Component{
	render(){
		return(
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						Welcome To Brenda!
					</Text>
				</View>
				<View style={styles.loginContainer}>
					<TextField
						dense={true}
						label={'Username'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
					/>
					<TextField
						dense={true}
						label={'email'}
						highlightColor={'#ffffff'}
						keyboardType={'email-address'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
					/>
					<TextField
						dense={true}
						label={'Password'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						secureTextEntry={true}
					/>

				</View>
				<View style={styles.buttonContainer}>
					<Button
						text='Sign up'
						raised={true}
						overrides={overrides}/>
				</View>
			</ScrollView>
		)
	}

}
var overrides = {
	textColor: '#E741F0',
	backgroundColor: '#Ffffff',
	rippleColor: '#E741F0'
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	loginContainer:{
		marginTop:50,
		width:300,
	},
	titleContainer:{
		flex:5,
		alignItems:'center',
		marginTop:100,
	},
	title:{
		color:'white',
		fontSize:25,
	},
	buttonContainer:{
		flex:1,
		flexDirection:'column',
		marginTop:50,
		justifyContent:'flex-end',
	}
})

export default SignUp