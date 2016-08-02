/**
 * Created by aviad on 8/2/2016.
 */
import {createStore} from 'cartiv';
import API from './API'

let authStore = createStore(
	{
		/* this is the store config: */
		api: API, // listen to actions coming from api
		name: 'auth', // actions under 'text' property, e.g: api.auth.smthn
		
		// config.actions is optional,
		// when not provided, all methods starting with 'on' will get called
		
		// config.actions can either be an array of strings or a filter function.
		actions: ['onSignUp'], // specify methods that will get called when equivalent action triggered
	},
	{
		/* this is the store definition: */
		getInitialState(){ // same as React!
			return {
				text:'hi'
			}
		},
		
		onChange(textFromAction){
			this.setState({text: textFromAction}); // same as React!
			// setState changes the store state. Instead of `rendering` like react - this will `control`
			// every connected component, that in turn will re-render
		},
		
		//async is easily done:
		onGetDataFromServer(){
			ajax.get(url).then((response)=>{
				this.setState({serverData: response}); //when it'll be available, it will auto change every connected component
			})
		},
		
		storeDidUpdate(prevState){ // same as React!
			if(this.state.text !== prevState.text){console.log('text has changed'); }
		}
	});

export default authStore;