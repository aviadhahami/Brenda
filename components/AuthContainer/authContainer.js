/**
 * Created by aviad on 6/20/2016.
 */

import React, {Component} from 'react'
import {Text, StyleSheet, ActivityIndicator, View} from 'react-native'
import LoginContainer from './LoginContainer/loginContainer'
import LinearGradient from 'react-native-linear-gradient'
import Spinner from 'react-native-loading-spinner-overlay';
import NavigationContainer from './../Navigation/navigationContainer'

import authStore from './../../stores/AuthStore';
import AuthAPI from '../../stores/APIs/AuthAPI'
import {createConnector} from 'cartiv';
const connect = createConnector(React);

@connect(authStore)
class AuthContainer extends Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		AuthAPI.auth.initFireBaseListener();
	}
	render(){
		let spinner;
		if(this.state.loading){
			spinner = <Spinner visible={true}/>
		}
		return (
			this.state.isAuth?
				// Is authenticated
				<NavigationContainer user={this.state.user}/>
				:
				// Not authenticated
				
				<LinearGradient colors={gradientColor} style={[styles.container]}>
					{spinner}
					<LoginContainer error={this.state.error} clearErrors={AuthAPI.auth.clearErrors.bind(this)} signIn={AuthAPI.auth.signIn.bind(this)} signUp={AuthAPI.auth.signUp.bind(this)}/>
				</LinearGradient>
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
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
});
const gradientColor = ['#D129BA', '#6B2162' , '#45153f'];
export default AuthContainer