/**
 * Created by aviad on 8/2/2016.
 */
import ImageAPI from './APIs/ImageAPI'
import {createStore} from 'cartiv'

let imageStore = createStore(
	{
		/* this is the store config: */
		api: ImageAPI, // listen to actions coming from api
		name: 'image', // actions under 'auth' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['uploadImageToProfile'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
				dummy:1
			}
		},
		uploadImageToProfile(base64Image){
			let uri = 'https://api.imgur.com/3/image?image='+base64Image;
			fetch(uri).then((res)=>res.json()).then((data)=>{
				console.log(data);
			});
		}
	});

export default imageStore;
