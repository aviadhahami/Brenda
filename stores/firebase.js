/**
 * Created by aviad on 9/11/2016.
 */

import * as firebase from 'firebase';
const firebaseConfig = {
	apiKey: "AIzaSyDvHAflY3tpYWmqL3tYxTUZ29TDV17mHUM",
	authDomain: "brenda-139c4.firebaseapp.com",
	databaseURL: "https://brenda-139c4.firebaseio.com",
	storageBucket: "",
};
const firebaseRef = firebase.initializeApp(firebaseConfig);

export default firebaseRef;