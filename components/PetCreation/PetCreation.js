/**
 * Created by aviad on 8/20/2016.
 */
import React, {Component} from 'react';
import Route from './../Navigation/Route'
import {Text, View, TouchableHighlight, ScrollView, Dimensions, StyleSheet, Picker} from 'react-native'
import TextField from 'react-native-md-textinput'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import Pet from './../../classes/Pet'
import PetsAPI from './../../stores/APIs/PetsAPI'


let {height, width} = Dimensions.get('window');

let inputTextColor = 'rgba(0,0,0,0.6)', inputHighlightColor = 'rgba(0,0,0,0.95)';
const Item = Picker.Item;

class PetCreation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pet: {
				sex: 'male',
				type: 'fish',
				name: '',
				age: '0'
			}
		}
	}
	
	createPet() {
		alert('creating pet');
		let pet = new Pet('brenda', 9, 'female', 'dog');
		pet.owners = this.props.user.uid;
		PetsAPI.pets.createPet(pet);
	}
	
	inputUpdate(key, val) {
		const newState = {...this.state};
		newState['pet'][key] = val;
		console.log('new state',newState)
		this.setState(newState);
	}
	render() {
		return (
			
			<LinearGradient colors={gradientColor} style={styles.gradient}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<View style={styles.inputContainer}>
						<View>
							<Text style={styles.header}>Pet Details</Text>
						</View>
						<View style={{
							width: width * 0.8,
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
							<View style={{width: width * 0.4}}>
								<TextField
									value={this.state.pet.name}
									dense={true}
									label={'Name'}
									keyboardType={'default'}
									highlightColor={inputHighlightColor}
									textColor={inputTextColor}
									labelColor={inputTextColor}
									ref="name"
									onChangeText={this.inputUpdate.bind(this,'name')}
								/>
							</View>
							<View>
								<Picker selectedValue={this.state.pet.type} mode={"dialog"}
										onValueChange={this.inputUpdate.bind(this, 'type')} style={styles.picker}>
									<Item label="Fish" value="fish" color='rgba(0,0,0,0.9)'/>
									<Item label="Dog" value="dog" color='rgba(0,0,0,0.9)'/>
									<Item label="Cat" value="cat" color='rgba(0,0,0,0.9)'/>
									<Item label="Cow" value="cow" color='rgba(0,0,0,0.9)'/>
								</Picker>
							</View>
						
						</View>
						<View style={{
							width: width * 0.8,
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
							<View style={{width: width * 0.4}}>
								<TextField
									value={this.state.pet.age}
									dense={true}
									label={'Age'}
									keyboardType={'numeric'}
									highlightColor={inputHighlightColor}
									textColor={inputTextColor}
									labelColor={inputTextColor}
									ref="age"
									onChangeText={this.inputUpdate.bind(this,'age')}
								/>
							</View>
							<View>
								<Picker selectedValue={this.state.pet.sex} mode={"dialog"}
										onValueChange={this.inputUpdate.bind(this, 'sex')} style={styles.picker}>
									<Item label="Male" value="male" color='rgba(0,0,0,0.9)'>
									</Item>
									<Item label="Female" value="female" color='rgba(0,0,0,0.9)'/>
								</Picker>
							</View>
						</View>
					</View>
					<View style={styles.createButton}>
						<Icon.Button name="paw" iconStyle={{color: '#009688'}} backgroundColor="transparent"
									 onPress={this.createPet.bind(this)}>
							<Text style={styles.buttonText}>Create</Text>
						</Icon.Button>
					</View>
				
				</ScrollView>
			</LinearGradient>
		)
	}
}

function leftButtonFunc(route, navigator, index, navState) {
	return <TouchableHighlight underlayColor={'transparent'} onPress={()=> {
		navigator.pop()
	}}><Icon name="chevron-left" color="white" size={30}></Icon></TouchableHighlight>
}
function rightButtonFunc(route, navigator, index, navState) {
	{/*return <TouchableHighlight><Icon name="plus" size={30} color="white"></Icon></TouchableHighlight>*/
	}
	return;
}
const styles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: 'transparent',
		width: width,
		marginTop: 59,
	},
	header: {
		textAlign: 'center',
		fontWeight: '100',
		color: 'rgba(0,0,0,0.95)',
		fontSize: 30
	},
	ButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputContainer: {
		marginTop: 20,
		padding: 20,
		height: height * 0.5,
		borderRadius: 3,
		backgroundColor: 'rgba(255,255,255,0.95)',
		width: width * 0.9,
		alignSelf: 'center',
		flexDirection: 'column',
	},
	createButton: {
		alignSelf: 'center',
		flexDirection: 'row',
		height: height * 0.2,
		width: width / 2.8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		flex: 1,
		flexDirection: 'row',
		textAlign: 'center',
		color: 'rgba(255,255,255,0.95)',
		fontSize: 25,
		fontWeight: "900"
	},
	picker: {
		marginTop: 30,
		alignSelf: 'flex-end',
		width: width * 0.35,
		color: 'rgba(0,0,0,0.85)'
	},
	gradient: {
		flex: 1,
	}
});
const gradientColor = ['#673AB7', '#673AB7', '#673AB7', 'black'];
let PetCreationRoute = new Route(1, 'Pet Creation', 'petCreation', <PetCreation />, leftButtonFunc, rightButtonFunc);
export {PetCreationRoute};
