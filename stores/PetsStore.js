/**
 * Created by aviad on 9/11/2016.
 */

/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import PetsApi from './APIs/PetsAPI'
import firebaseRef from './firebase'
import q from 'q'


let petsStore = createStore(
	{
		/* this is the store config: */
		api: PetsApi, // listen to actions coming from api
		name: 'pets', // actions under 'auth' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['createPet','retrievePets'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
				pets: []
			}
		},
		async createPet(pet, owner_uid){
			let petPromise = new Promise((res, rej)=> {
				let petKey = firebaseRef.database().ref('pets').push().key;
				let newRef = firebaseRef.database().ref(`pets/${petKey}`).set(pet.toJSON());
				if (newRef) {
					res(petKey)
				} else {
					rej('error')
				}
			});
			let key = await petPromise;
			let userPromise = new Promise((res, rej)=> {
				let prom = firebaseRef.database().ref(`users/${owner_uid}/pets`).push(key);
				if (prom) {
					res(prom)
					return 'success'
				} else {
					rej('error')
				}
			});
		},
		retrievePets(uid){
			
		}
	});
// createStore.allowHMR(module, authStore);
export default petsStore;
