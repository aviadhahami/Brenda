/**
 * Created by aviad on 8/13/2016.
 */


import PetSelection from './../PetSelection/PetSelection'
class componentsConfig{
	static get getInitialComponent(){
		return { title: 'Awesome Scene', index: 0, component: <PetSelection /> }
	}
	static get getComponents(){
		return [
			
		]
	}
}

export default componentsConfig