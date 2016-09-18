/**
 * Created by aviad on 9/11/2016.
 */

import { createStore } from 'cartiv';
import PetsAPI from './APIs/PetsAPI'
import firebaseRef from './firebase'
import q from 'q'


let PetsStore = createStore(
		{
			/* this is the store config: */
			api: PetsAPI, // listen to actions coming from api
			name: 'pets', // actions under 'auth' property, e.g: api.auth.smthn
			
			// config.actions is optional,
			// when not provided, all methods starting with 'on' will get called
			
			// config.actions can either be an array of strings or a filter function.
			actions: ['createPet', 'retrievePets', 'retrievePetsInfo'], // specify methods that will get called when equivalent action triggered
		},
		{
			/* this is the store definition: */
			getInitialState(){ // same as React!
				console.log('called initial state');
				return {
					pets: ['a', 'b', 'c', 'd']
				}
			},
			async createPet(pet, owner_uid){
				let petPromise = new Promise((res, rej)=> {
					let petKey = firebaseRef.database().ref('pets').push().key;
					let newRef = firebaseRef.database().ref(`pets/${petKey}`).set(pet.toJSON());
					if ( newRef ) {
						res(petKey)
					} else {
						rej('error')
					}
				});
				let key = await petPromise;
				let userPromise = new Promise((res, rej)=> {
					let prom = firebaseRef.database().ref(`users/${owner_uid}/pets`).push(key);
					if ( prom ) {
						res(prom)
						return 'success'
					} else {
						rej('error')
					}
				});
			},
			retrievePets(uid, callback){
				let deferred = q.defer();
				firebaseRef.database().ref(`/users/${uid}/pets`).once('value').then((snapshot, err)=> {
					if ( err ) {
						deferred.reject(err);
					}
					deferred.resolve(snapshot.val());
				});
				callback(deferred.promise);
			},
			retrievePetsInfo(petsObj, callback){
				console.log(Object.keys(petsObj));
				
				let result = [];
				Object.keys(petsObj).forEach(k => {
					console.log('getting', petsObj[k]);
					firebaseRef.database().ref(`/pets/${petsObj[k]}`).once('value').then((snapshot)=>
							callback(snapshot.val())
					)
				});
			}
		});
// createStore.allowHMR(module, authStore);
export default PetsStore;
