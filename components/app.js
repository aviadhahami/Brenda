/**
 * Created by aviad on 6/15/2016.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import SplashScreen from './splashScreen/splashScreen'

class App extends Component{
	render(){
		return(
			<SplashScreen logo={require('./../assets/logo/Brenda-Logo.png')} duration={3000} backgroundColor={styles.splashScreenContainer}>
				<View style={styles.container}>
					<Text style={styles.welcome}>
						Welcome to React Native!
					</Text>
				</View>
			</SplashScreen>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	splashScreenContainer: {
		backgroundColor:'#E1BEE7'
	}
});

export default App;