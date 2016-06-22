/**
 * Created by aviad on 6/22/2016.
 */


import React, {Component} from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { Button, Divider } from 'react-native-material-design'
import TextField from 'react-native-md-textinput'

const overrides={
	textColor:'black',
	backgroundColor:'black',
	rippleColor:'white'
};

class Login extends Component{

	render(){

		return(
			<View style={styles.container}>
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
						label={'Password'}
						highlightColor={'#ffffff'}
						keyboardType={'default'}
						textColor={'#ffffff'}
						labelColor={'#ffffff'}
						secureTextEntry={true}
					/>
					<Button text='Sign in' raised={true} />
				</View>
				<View style={styles.signup}>
					<Button
						text='or Sign up'
						raised={false}
						overrides={overrides}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#e91e63',
		flexDirection:'column',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleContainer:{
		justifyContent:'center',
		height:200
	},
	title:{
		color:'white',
		fontSize:25,
	},
	loginContainer:{
		width:250,
		// height:0
	},
	signup:{
		height:200,
		justifyContent:'flex-end'
	},
});

export default Login