/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'
import {petSelectionRoute} from './../PetSelection/PetSelection'
import {PetCreationRoute} from './../PetCreation/PetCreation'

let initialRoute = petSelectionRoute;

class componentsConfig{
	static get getInitialComponent(){
		return initialRoute
	}
	static get getComponents(){
		return [
			initialRoute,
			PetCreationRoute
		]
	}
}

export {petSelectionRoute}
export default componentsConfig