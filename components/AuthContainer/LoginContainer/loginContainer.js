/**
 * Created by aviad on 6/20/2016.
 */

import React, { Component } from 'react'

import Login from './login'
import SignUp from './signUp'

class LoginContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			exist: true,
		}
	}
	render(){
		return(
			!this.state.exist?
				<Login/>
				:
				<SignUp />
		)
	}
}


export default LoginContainer