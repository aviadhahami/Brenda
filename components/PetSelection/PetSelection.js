/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {Text} from 'react-native'

class PetSelection extends Component{
	constructor(props){
		super(props)
	}
	get title(){
		return 'Pet Selection'
	}
	render(){
		return(
			<Text>PetSelection</Text>
		)
	}
	
}
export default PetSelection