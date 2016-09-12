/**
 * Created by aviad on 8/13/2016.
 */


import React, {Component} from 'react'
import {ScrollView, View, ListView, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native'
import Route from './../Navigation/Route'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'apsl-react-native-button'
import {PetCreationRoute} from './../PetCreation/PetCreation'


import PetsAPI from './../../stores/APIs/PetsAPI'
import PetsStore from './../../stores/PetsStore' // Important! invoking the pet store
import LinearGradient from 'react-native-linear-gradient'
import {createConnector} from 'cartiv';
const connect = createConnector(React);


let {height} = Dimensions.get('window');
@connect(PetsStore)
class PetSelection extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([]),
		};
		PetsAPI.pets.initPetsListener();
		const that = this;
		console.log(this.state);
	}
	
	componentDidMount() {
		console.log('state', this.state);
		PetsAPI.pets.retrievePets(this.props.user.uid)
	}
	
	render() {
		return (
			<LinearGradient colors={gradientColor} style={styles.gradient}>
				{/*<ListView style={{backgroundColor: 'rgba(0,0,0,0)', marginTop: height * 0.1, height: height}}*/}
				{/*contentContainerStyle={styles.list}*/}
				{/*dataSource={this.state.dataSource}*/}
				{/*renderRow={(rowData) => <CircleNameButton style={styles.item} name={rowData}/>}>*/}
				{/*</ListView>*/}
			</LinearGradient>
		)
	}
	
	
}

function leftButtonFunc(route, navigator, index, navState) {
	return null;
}
function rightButtonFunc(route, navigator, index, navState) {
	return <TouchableHighlight underlayColor={'transparent'} onPress={()=> {
		navigator.push(PetCreationRoute)
	}}><Icon name="plus" size={30} color="white"></Icon></TouchableHighlight>
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'transparent',
	},
	gradient: {
		flex: 1
	},
	list: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	item: {
		// backgroundColor: '#CCC',
		margin: 10,
		width: 100,
		height: 100
	}
});
const gradientColor = ['#673AB7', '#673AB7', '#673AB7', 'black'];

let petSelectionRoute = new Route(0, 'My Pets', 'petSelection', <PetSelection />, leftButtonFunc, rightButtonFunc);
export {petSelectionRoute};

class CircleNameButton extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		let fullName = this.props.name.charAt(0).toUpperCase();
		
		if (this.props.name.length > 7) {
			fullName += this.props.name.substring(1, 5).toLowerCase() + '..'
		} else {
			fullName += this.props.name.substring(1).toLowerCase()
		}
		return (
			<View style={circleStyles.circle}>
				<TouchableHighlight>
					<View>
						<Text style={circleStyles.bigLetter}>
							{this.props.name.charAt(0).toUpperCase()}
						</Text>
						<Text style={circleStyles.fullName}>
							{fullName}
						</Text>
					</View>
				
				</TouchableHighlight>
			</View>
		)
	}
}


const circleStyles = StyleSheet.create({
	container: {},
	circle: {
		width: 100,
		height: 100,
		margin: 10,
		borderRadius: 500,
		borderWidth: 5,
		borderColor: 'rgba(255,255,255,1)'
	},
	bigLetter: {
		// height:50,
		fontSize: 50,
		fontWeight: "800",
		color: 'white',
		alignSelf: 'center'
	},
	fullName: {
		marginTop: -5,
		color: 'white',
		alignSelf: 'center'
	}
});
