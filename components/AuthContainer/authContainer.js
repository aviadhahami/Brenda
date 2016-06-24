/**
 * Created by aviad on 6/20/2016.
 */

import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import LoginContainer from './LoginContainer/loginContainer'
import LinearGradient from 'react-native-linear-gradient'

class AuthContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			isAuth: false,
		};
	}
	render(){
		return (
			!this.state.isAuth?
				// Not authenticated
				<LinearGradient colors={gradientColor} style={[styles.container]}>
					<LoginContainer />
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
const gradientColor =	['#6B2162', '#D129BA'];
export default AuthContainer