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
						Sign up to use Brenda!
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

				<View style={styles.signupContainer}>
					<Button
						text='Already have an account? Sign In!'
						onPress={this.props.click}
						raised={false}
						overrides={overridesSec}/>
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
const overridesSec = {
	textColor: 'rgba(255, 255, 255, 0.8)',
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
		marginTop:50,
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
	},
	signupContainer:{
		marginTop:80,
		justifyContent:'flex-end'
	},
})

export default SignUp