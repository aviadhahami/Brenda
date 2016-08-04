/**
 * Created by aviad on 6/20/2016.
 */

import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import LoginContainer from './LoginContainer/loginContainer'
import LinearGradient from 'react-native-linear-gradient'

import authStore from './../../stores/AuthStore';
import API from './../../stores/API'
import {createConnector} from 'cartiv';
const connect = createConnector(React);

@connect(authStore)
class AuthContainer extends Component{
	constructor(props){
		super(props);
		console.log(this);
	}
	render(){
		return (
			!this.state.isAuth?
				// Not authenticated
				<LinearGradient colors={gradientColor} style={[styles.container]}>
					<LoginContainer signIn={API.auth.signIn.bind(this)} signUp={API.auth.signUp.bind(this)}/>
				</LinearGradient>
				:
				// Is authenticated
				<Text>
					yes Auth
				</Text>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
const gradientColor = ['#D129BA', '#6B2162' , '#45153f'];
export default AuthContainer