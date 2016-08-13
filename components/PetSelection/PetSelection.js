/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {View, Text} from 'react-native'

class PetSelection extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={{backgroundColor:'green', marginTop:55,height:300}}>
				<Text>PetSelection</Text>
			</View>
		)
	}
	
}
export default PetSelection