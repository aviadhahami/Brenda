/**
 * Created by aviad on 6/20/2016.
 */

import React, { Component } from 'react'

import Login from './login'
import SignUp from './signUp'

class LoginContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			exist: true,
		}
	}
	userHasAccount(){
		this.setState({exist:true});
		this.props.clearErrors();
	}
	userDoesntHaveAccount(){
		this.setState({exist:false});
		this.props.clearErrors();
	}
	render(){
		return(
			this.state.exist?
				<Login error={this.props.error} signIn={this.props.signIn} click={this.userDoesntHaveAccount.bind(this)}/>
				:
				<SignUp error={this.props.error} signUp={this.props.signUp} click={this.userHasAccount.bind(this)}/>
		)
	}
}


export default LoginContainer