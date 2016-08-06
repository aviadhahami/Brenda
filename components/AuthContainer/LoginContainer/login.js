/**
 * Created by aviad on 6/22/2016.
 */


import React, {Component} from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
// import { Button, Divider } from 'react-native-material-design'
import TextField from 'react-native-md-textinput'

import Button from 'apsl-react-native-button'

const overridesMain = {
	textColor: '#E741F0',
	backgroundColor: '#Ffffff',
	rippleColor: '#E741F0'
};

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			// fadeAnim: new Animated.Value(0.5), // init opacity 0
			email: '',
			password: ''
		}
	}
	signIn(){
		let email = this.refs.email.state.text;
		let password =this.refs.password.state.text;
		if(!!this.refs.email.state.text && !!this.refs.password.state.text){
			this.props.signIn(email,password);
		}
	}
	render(){
		return(
			<ScrollView>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						Welcome To Brenda!
					</Text>
				</View>
				<View style={styles.loginContainer}>
					<TextField
						dense={true}
						label={'Email'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
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
					<View style={styles.signIn}>
						<Button
							text='Sign in'
							raised={true}
							onPress={this.signIn.bind(this)}
							overrides={overridesMain}
						/>
					</View>
				</View>
				<View style={styles.signupContainer}>
					<Button
						style={styles.button}
						onPress={this.props.click}>
						Don't have an account? Sign Up!
					</Button>
				</View>
			</ScrollView>
		)
		
	}
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
		alignItems:'center',
		marginTop:100,
	},
	title:{
		color:'white',
		fontSize:25,
	},
	signIn:{
		marginTop:20
	},
	signupContainer:{
		marginTop:100,
		justifyContent:'flex-end'
	},
	errorContainer:{
		marginTop:10,
		alignItems:'center',
	},
	errorMessage:{
		color:'#FF6161'
	},
	button:{
		textColor: 'rgba(255, 255, 255, 0.8)',
		backgroundColor: '#Ffffff',
	}
});

export default Login