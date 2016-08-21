/**
 * Created by aviad on 8/2/2016.
 */
import ImageAPI from './APIs/ImageAPI'
import {createStore} from 'cartiv'

let assign = require('object.assign/polyfill')();
Object.assign = assign;

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
function blobToFile(theBlob, fileName){
	//A Blob() is almost a File() - it's just missing the two properties below which we will add
	theBlob.lastModifiedDate = new Date();
	theBlob.name = fileName;
	return theBlob;
}

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
			
			const auth = 'Client-ID fd9dc27ce22f620';
			let xhr = new XMLHttpRequest();
			const url = 'https://api.imgur.com/3/image';
			let fd = new FormData();
			fd.append('image',new File([b64toBlob(base64Image)],"my-image.png"));
			fd.append('type','base64');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					console.log(xhr.responseText);
					// var myArr = JSON.parse();
					// myFunction(myArr);
				}else{
					console.log(xhr);
				}
			};
			
			xhr.open('POST',url,true);
			// xhr.setRequestHeader('Authorization',auth);
			xhr.setRequestHeader('Content-Type','multipart/form-data');
			xhr.send(fd);
			
			// let request = new Request('https://api.imgur.com/3/upload', {
			// 	method: 'POST',
			// 	body:JSON.stringify({
			// 		image:	base64Image.uri,
			// 		type:'base64'
			// 	}),
			// 	headers: {
			// 		Authorization: auth
			// 	}
			// });
			// fetch(request).then((res)=>{
			// 	console.log(res);
			// 	}
			// ).then((data)=>{
			// 	console.log(data);
			// });
		}
	});

export default imageStore;
