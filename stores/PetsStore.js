/**
 * Created by aviad on 9/11/2016.
 */

/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import AuthAPI from './APIs/AuthAPI'
import firebaseRef from './firebase'


function sanitizeUserData(user) {
	let clearUser={};
	user.providerData.forEach((profile) => {
		clearUser['displayName'] = profile.displayName || user.displayName;
		clearUser['email'] = profile.email ||  user.email;
		clearUser['photoURL'] = profile.photoURL || user.photoURL;
	});
	return clearUser;
}

let authStore = createStore(
	{
		/* this is the store config: */
		api: AuthAPI, // listen to actions coming from api
		name: 'auth', // actions under 'auth' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['createPet'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
				pets:[]
			}
		},
		createPet(pet){
			
		}
	});
// createStore.allowHMR(module, authStore);
export default authStore;
