/**
 * Created by aviad on 6/22/2016.
 */

import React, {Component} from "react";
import {ScrollView, View, Text, StyleSheet} from "react-native";
import TextField from "react-native-md-textinput";
import Button from "apsl-react-native-button";
// import { Button } from 'react-native-material-design'


class SignUp extends Component{
	constructor(props){
		super(props);
	}
	signUp(){
		console.log(this);
		let email = this.refs.email.state.text;
		let password = this.refs.password.state.text;
		let displayName = this.refs.displayName.state.text;
		if (!!email && !!password){
			this.props.signUp(displayName, email,password);
		}
	}
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
						label={'Display name'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						ref="displayName"
					/>
					<TextField
						dense={true}
						label={'Email'}
						highlightColor={'#ffffff'}
						keyboardType={'email-address'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						ref="email"
					/>
					<TextField
						dense={true}
						label={'Password'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						secureTextEntry={true}
						ref="password"
					/>
					<View style={styles.errorContainer}>
						<Text style={styles.errorMessage}>{this.props.error}</Text>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						onPress={this.signUp.bind(this)}
						style={styles.mainButton}
						textStyle={{color: 'rgba(231, 65, 240, 1)'}}>
						Sign up
					</Button>
				</View>
				<View style={styles.signupContainer}>
					<Button
						style={styles.secondaryButton}
						textStyle={{color: 'rgba(255, 255, 255, 0.8)'}}
						onPress={this.props.click}>
						Don't have an account? Sign Up!
					</Button>
				</View>
			</ScrollView>
		)
	}
	
}
var overrides = {
	textColor: '#E741F0',
	backgroundColor: '#Ffffff',
	rippleColor: '#E741F0'
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	loginContainer:{
		marginTop:0,
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
	errorContainer:{
		marginTop:10,
		alignItems:'center',
	},
	errorMessage:{
		color:'#FF6161'
	},
	mainButton:{
		backgroundColor: 'rgba(255, 255, 255, 1)',
		borderWidth:1,
		borderColor:'rgba(255, 255, 255, 1)'
	},
	secondaryButton:{
		color: 'rgba(255, 255, 255, 0.8)',
		backgroundColor: 'transparent',
		borderWidth:0,
		borderColor:'rgba(255, 255, 255, 1)'
	}
});

export default SignUp