/**
 * Created by aviad on 6/15/2016.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

class SplashScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			done: false,
			fadeAnim: new Animated.Value(0), // init opacity 0
		}
	}

	timer() {
		setTimeout(()=>{
			this.setState({
				done: true
			});
		},this.props.duration || 1000)
	}
	componentDidMount(){
		Animated.timing(          // Uses easing functions
			this.state.fadeAnim,    // The value to drive
			{toValue: 1}            // Configuration
		).start();                // Don't forget start!
		this.timer();
	}
	render(){
		return(
			this.state.done ?
				// If done -> Show all nested
				({...this.props.children})
				:
				// Display Splash Screen
				(
					<Animated.View style={[{opacity: this.state.fadeAnim},styles.container]}>
						<LinearGradient colors={gradientColor} style={styles.gradient}>
							<Image style={styles.logo} source={this.props.logo} resizeMode='contain'/>
						</LinearGradient>
					</Animated.View>
				)

		);
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection:'column',
		flex: 1,
	},
	gradient:{
		flexDirection:'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		flex:1,
		width:300
	}
});
const gradientColor =	['#D129BA', '#6B2162' , '#45153f'];

export default SplashScreen