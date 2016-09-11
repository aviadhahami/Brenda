/**
 * Created by aviad on 9/11/2016.
 */

/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import PetsApi from './APIs/PetsAPI'
import firebaseRef from './firebase'


let petsStore = createStore(
	{
		/* this is the store config: */
		api: PetsApi, // listen to actions coming from api
		name: 'pets', // actions under 'auth' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['createPet'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
				pets: []
			}
		},
		createPet(pet){
			alert('creating pet - store');
			let petKey = firebaseRef.database().ref('pets').push().key;
			firebaseRef.database().ref(`pets/${petKey}`).set(pet.toJSON()).then(res=> {
				console.log('res frm pet creation', res);
			}, err=> {
				console.log('err from pet', err);
			});
		}
	});
// createStore.allowHMR(module, authStore);
export default petsStore;
