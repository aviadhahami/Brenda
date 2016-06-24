/**
 * Created by aviad on 6/15/2016.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

class SplashScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			done: false
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
				<LinearGradient colors={gradientColor} style={[styles.container]}>
					<Image style={styles.logo} source={this.props.logo} resizeMode='contain'/>
				</LinearGradient>
				)

		);
	}

}

const styles = StyleSheet.create({
	container: {
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
const gradientColor =	['#6B2162', '#D129BA'];

export default SplashScreen