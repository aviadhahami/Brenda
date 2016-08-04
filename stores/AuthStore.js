/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import API from './API'
import * as firebase from 'firebase';
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

const firebaseConfig = {
	apiKey: "AIzaSyDvHAflY3tpYWmqL3tYxTUZ29TDV17mHUM",
	authDomain: "brenda-139c4.firebaseapp.com",
	databaseURL: "https://brenda-139c4.firebaseio.com",
	storageBucket: "",
};
const firebaseRef = firebase.initializeApp(firebaseConfig);

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
			this.initFireBaseListener();
			return {
				isAuth:false,
				loading: false
			}
		},
		initFireBaseListener(){
			firebaseRef.auth().onAuthStateChanged((user)=>{
				if (user) {
					// User is signed in.
					console.log(user);
				} else {
					// No user is signed in.
				}
			});
		},
		signUp(email, password){
			console.log('create user',email,password);
			firebaseRef.auth().createUserWithEmailAndPassword(email, password).catch((error) =>{
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
				console.log('error', error);
			});
		},
		
		signIn(email, password){
			console.log('signin',email, password);
		}
	});
// createStore.allowHMR(module, authStore);
export default authStore;
