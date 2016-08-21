/**
 * Created by aviad on 8/2/2016.
 */
import ImageAPI from './APIs/ImageAPI'
import {createStore} from 'cartiv'
import RNFetchBlob from 'react-native-fetch-blob'


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
			console.log(base64Image);
			// return;
			const auth = 'Client-ID fd9dc27ce22f620';
			const url = 'https://api.imgur.com/3/image';
			// const img = new File([b64toBlob(base64Image)],"my-image.png");
			
			RNFetchBlob.fetch('POST', url, {
				Authorization : auth,
				'Content-Type' : 'multipart/form-data',
				// Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
				// Or simply wrap the file path with RNFetchBlob.wrap().
			}, [
				{data:{image:'RNFetchBlob-file://'+base64Image.uri,type:'image'}}
				])
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					// error handling ..
				})
		}
	});

export default imageStore;
