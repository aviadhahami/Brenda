/**
 * Created by aviad on 6/22/2016.
 */

import React, {Component} from 'react'
import {ScrollView,
	View,
	Text,
	StyleSheet,
	Animated} from 'react-native'

import { Button } from 'react-native-material-design'
import TextField from 'react-native-md-textinput'


class SignUp extends Component{
	constructor(props){
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0.5), // init opacity 0
		}
	}
	componentDidMount() {
		Animated.timing(          // Uses easing functions
			this.state.fadeAnim,    // The value to drive
			{toValue: 1}            // Configuration
		).start();                // Don't forget start!
	}
	signUp(){
		console.log(this);
		let email = this.refs.email.state.text;
		let password = this.refs.password.state.text;
		let displayname = this.refs.displayName.state.text;
		if (!!email && !!password){
			this.props.signUp(email,password);
		}
	}
	render(){
		return(
			<Animated.View style={[styles.container,{opacity: this.state.fadeAnim}]}>
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

					</View>
					<View style={styles.buttonContainer}>
						<Button
							text='Sign up'
							raised={true}
							onPress={this.signUp.bind(this)}
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
			</Animated.View>
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