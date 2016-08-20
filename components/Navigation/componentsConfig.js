/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'
import {petSelectionRoute} from './../PetSelection/PetSelection'

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

export {petSelectionRoute}
export default componentsConfig