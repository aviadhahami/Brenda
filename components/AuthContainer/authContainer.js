/**
 * Created by aviad on 6/20/2016.
 */

import React, { Component } from 'react'
import {Text} from 'react-native'
import LoginContainer from './LoginContainer/loginContainer'

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
				<LoginContainer />
				:
				// Is authenticated
				<Text>
					yes Auth
				</Text>
		)
	}
}

export default AuthContainer