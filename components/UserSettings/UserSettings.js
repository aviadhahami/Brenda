/**
 * Created by aviad on 8/13/2016.
 */


import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import TextField from 'react-native-md-textinput'
import Button from 'apsl-react-native-button'


// Picture manager
import ImagePicker from 'react-native-image-picker'
// Store related
import AuthAPI from './../../stores/APIs/AuthAPI'
import ImageAPI from './../../stores/APIs/ImageAPI'

let {height,width} = Dimensions.get('window');
let inputTextColor = 'rgba(0,0,0,0.6)', inputHighlightColor = '#E040FB';
let imagePickerOption =  {
	title: 'Select Avatar',
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};

class UserSettings extends Component{
	constructor(props){
		super(props);
		console.log(this.props.user);
		console.log('api', AuthAPI);
	}
	_shrinkDisplayName(name){
		let newName = name;
		if(newName.length>20){
			newName = newName.substr(0,17) + '...'
		}
		return newName;
	}
	_updateInfo() {
		let email = this.refs.email.state.text;
		let displayName = this.refs.displayName.state.text;
		let res;
		
		// TODO: User need to re-authenticate here, should pop dialog or someshit
		// TODO: handle errors properly
		if(email != this.props.user.email){
			res = AuthAPI.auth.updateUserEmail(email);
		}
		if (displayName != this.props.user.displayName){
			AuthAPI.auth.updateUserGeneralInfo({displayName:displayName});
		}
	}
	_popImagePicker(){
		ImagePicker.showImagePicker(imagePickerOption, (response) => {
			console.log('Response = ', response);
			
			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				// You can display the image using either data...
				const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
				
				this.setState({
					avatarSource: source
				});
				
				ImageAPI.imageStore.uploadImageToProfile(source);
			}
		});
	}
	render(){
		let displayName = this._shrinkDisplayName(this.props.user.displayName);
		let src= this.props.user.photoURL ? {uri: 'https://goo.gl/OHBNPr'} : require('./../../assets/stubs/userImage.png')
		console.log(this.props.user);
		return(
			<ScrollView contentContainerStyle={styles.container} ref="scrollView" scrollEnabled={false}>
				<View style={styles.content}>
					<TouchableOpacity onPress={()=>{
						this._popImagePicker();
					}}>
						<View style={styles.photoContainer}>
							<Image resizeMode="contain" source={src} style={styles.photoStyles}></Image>
						</View>
					</TouchableOpacity>
					
					<View style={styles.textContainer}>
						<Text style={styles.userText}>{displayName}</Text>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.userMailText}>{this.props.user.email}</Text>
					</View>
					<View style={styles.dividerContainer}>
						<TouchableOpacity style={{alignItems:'center'}}onPress={()=>{
							console.log(this.refs.scrollView.add);
							this.refs.scrollView.scrollTo({y:height*0.9,animated:true});
						}}>
							<Text>Scroll down to edit info</Text>
							<Icon name="chevron-down"></Icon>
						</TouchableOpacity>
					</View>
					<View style={styles.editSectionContainer}>
						<View style={styles.editSectionTitleContainer}>
							<Icon name="wrench" style={styles.editSectionTitleText}></Icon>
							<Text style={{width:width*0.02}}></Text>
							<Text style={styles.editSectionTitleText}>Update user info</Text>
						</View>
						<View style={styles.editSectionContent}>
							<View style={styles.inputContainer}>
								<TextField
									value={this.props.user.displayName}
									dense={true}
									label={'Display Name'}
									highlightColor={inputHighlightColor}
									textColor={inputTextColor}
									labelColor={inputTextColor}
									ref="displayName"
								/>
								<TextField
									value={this.props.user.email}
									dense={true}
									label={'Email'}
									keyboardType={'email-address'}
									highlightColor={inputHighlightColor}
									textColor={inputTextColor}
									labelColor={inputTextColor}
									ref="email"
								/>
							</View>
							<View style={styles.buttonContainer}>
								<Button style={styles.button} onPress={ () =>{ this._updateInfo()}}>
									<Text style={styles.buttonText}>Update</Text>
								</Button>
							</View>
						</View>
						<View style={styles.editSectionFooter}>
							<TouchableOpacity style={{alignItems:'center'}}onPress={()=>{
								this.refs.scrollView.scrollTo({y:0,animated:true});
							}}>
								<Icon name="chevron-up"></Icon>
								<Text>Back to top</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		)
	}
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return null;
}
function rightButtonFunc(route, navigator, index, navState) {
	return null;
}

const styles = StyleSheet.create({
	
	container:{
		backgroundColor:'rgba(255,255,255,0.1)',
	},
	content:{
		marginTop:height*0.1,
		paddingTop:height*0.05,
		alignItems:'center',
	},
	photoContainer:{
		width:200,
		height:200,
		alignItems:'center',
		borderWidth:1,
		borderRadius:1000,
		borderColor:'rgba(0,0,0,0.05)'
	},
	photoStyles:{
		width:200,
		height:200,
		borderRadius:1000,
	},
	textContainer:{
		flexDirection:'column',
	},
	userText:{
		color: 'rgba(0,0,0,0.65)',
		fontSize:35,
	},
	userMailText:{
		fontSize:20,
		color: 'rgba(0,0,0,0.5)',
	},
	dividerContainer:{
		alignItems:'center',
		width:width,
		marginTop:height*0.25,
		marginBottom:height*0.1
	},
	editSectionContainer:{
		height:height*0.8,
		alignItems:'center',
	},
	editSectionTitleContainer:{
		flexDirection:'row'
	},
	editSectionTitleText:{
		fontSize:35,
		color: 'rgba(0,0,0,0.65)',
	},
	editSectionContent:{
		marginTop:height*0.05,
	},
	inputContainer:{
		width:width*0.8,
		alignSelf:'center'
	},
	inputBox:{
		fontSize:15,
		color: 'rgba(0,0,0,0.65)',
	},
	editSectionFooter:{
		marginTop:height*0.18
	},
	buttonText:{
		marginTop:10,
		color:'rgba(0,0,0,0.6)'
	},
	button:{
		backgroundColor: '#FFEB3B',
		margin:10,
		width:width*0.8,
		borderWidth:0,
	},
	buttonContainer:{
		flexDirection:'row',
		alignSelf:'center',
		marginTop: height*0.05
	}
});

let userSettingsRoute = new Route(2,'Settings','userSettings', <UserSettings />,leftButtonFunc, rightButtonFunc);
export {userSettingsRoute};
