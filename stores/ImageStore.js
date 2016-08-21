/**
 * Created by aviad on 8/2/2016.
 */
import ImageAPI from './APIs/ImageAPI'
import {createStore} from 'cartiv'


const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
	const byteCharacters = atob(b64Data);
	const byteArrays = [];
	
	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);
		
		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}
		
		const byteArray = new Uint8Array(byteNumbers);
		
		byteArrays.push(byteArray);
	}
	
	const blob = new Blob(byteArrays, {type: contentType});
	return blob;
};

let imageStore = createStore(
	{
		/* this is the store config: */
		api: ImageAPI, // listen to actions coming from api
		name: 'images', // actions under 'auth' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['uploadImageToProfile'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
			}
		},
		uploadImageToProfile(base64Image){
			
			// Relevant path : base64Image.path
			const contentType = 'image/png';
			const b64Data = base64Image;
			const blob = b64toBlob(b64Data, contentType);
			
			console.log(blob);
			let request = new Request('http://uploads.im/api', {
				method: 'POST',
				body:blob
			});
			fetch(request).then((res)=>res.json()).then((data)=>{
				console.log(data);
			});
		}
	});

export default imageStore;
