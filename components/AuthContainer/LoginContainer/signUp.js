/**
 * Created by aviad on 6/22/2016.
 */

import React, {Component} from 'react'
import {ScrollView,
	View,
	Text,
	StyleSheet,} from 'react-native'

import { Button, Divider } from 'react-native-material-design'
import TextField from 'react-native-md-textinput'

class SignUp extends Component{
	render(){
		return(
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						Welcome To Brenda!
					</Text>
				</View>
				<View style={styles.loginContainer}>
					<TextField
						dense={true}
						label={'Username'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
					/>
					<TextField
						dense={true}
						label={'email'}
						highlightColor={'#ffffff'}
						keyboardType={'email-address'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
					/>
					<TextField
						dense={true}
						label={'Password'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						secureTextEntry={true}
					/>

				</View>
				<View>
					<Divider/>
					<Button
						text='Sign up'
						raised={true}
						overrides={overrides}/>
				</View>
			</ScrollView>
		)
	}

}

const overrides={
	textColor:'black',
	backgroundColor:'black',
	rippleColor:'white'
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		// alignItems: 'center',
		// justifyContent:'center',

	},
	loginContainer:{
		width:250,
		// height:0
	},
	titleContainer:{

		height:200
	},
	title:{
		color:'white',
		fontSize:25,
	},
})

export default SignUp