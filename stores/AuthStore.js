/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import API from './API'
// FireBase.createUser({
// 	email    : "bobtony@firebase.com",
// 	password : "correcthorsebatterystaple"
// }, function(error, userData) {
// 	if (error) {
// 		console.log("Error creating user:", error);
// 	} else {
// 		console.log("Successfully created user account with uid:", userData.uid);
// 	}
// });
let FireBase = new Firebase("https://brenda-139c4.firebaseio.com");

let authStore = createStore(
	{
		/* this is the store config: */
		api: API, // listen to actions coming from api
		name: 'auth', // actions under 'auth' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['signUp','signIn'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
				isAuth:false,
				loading: false
			}
		},
		
		signUp(email, password){
			console.log('create user',email,password);
		},
		
		signIn(email, password){
			console.log('signin',email, password);
		}
	});
// createStore.allowHMR(module, authStore);
export default authStore;
