/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import API from './API'

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
				isAuth:false
			}
		},
		
		signUp(){
			console.log('create user');
		},
		
		signIn(email,password){
			console.log(this);
			console.log('signIn invoked');
			console.log(email, password);
		}
	});
// createStore.allowHMR(module, authStore);
export default authStore;
