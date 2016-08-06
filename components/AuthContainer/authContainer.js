/**
 * Created by aviad on 6/20/2016.
 */

import React, {Component} from 'react'
import {Text, StyleSheet, ActivityIndicator} from 'react-native'
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
	}
	componentWillMount(){
		API.auth.initFireBaseListener();
	}
	render(){
		return (
			this.state.loading?
				<ActivityIndicator
					animating={this.state.animating}
					style={[styles.centering, {height: 80}]}
					size="large"
					color="black"
				/>
				:
				!this.state.isAuth?
					// Not authenticated
					<LinearGradient colors={gradientColor} style={[styles.container]}>
						<LoginContainer signIn={API.auth.signIn.bind(this)} signUp={API.auth.signUp.bind(this)}/>
					</LinearGradient>
					:
					// Is authenticated
					<Text>
						welcome {this.state.user.displayName}
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
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
});
const gradientColor = ['#D129BA', '#6B2162' , '#45153f'];
export default AuthContainer