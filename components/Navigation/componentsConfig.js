/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'
import Route from './Route'
import {petSelectionRoute} from './../PetSelection/PetSelection'

// import PetSelection from './../PetSelection/PetSelection'
let initialRoute = petSelectionRoute;

class componentsConfig{
	static get getInitialComponent(){
		return initialRoute
	}
	static get getComponents(){
		return [
			initialRoute,
		]
	}
}

export default componentsConfig