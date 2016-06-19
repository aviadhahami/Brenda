/**
 * Created by aviad on 6/20/2016.
 */

import React, { Component } from 'react'
import {Text} from 'react-native'

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
				<Text>
					Not auth
				</Text>
				:
				// Is authenticated
				<Text>
					yes Auth
				</Text>
		)
	}
}

export default AuthContainer