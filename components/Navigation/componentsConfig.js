/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'
import {petSelectionRoute} from './../PetSelection/PetSelection'
import {PetCreationRoute} from './../PetCreation/PetCreation'
import {userSettingsRoute} from './../UserSettings/UserSettings'

let initialRoute = petSelectionRoute;

class componentsConfig{
	static get getInitialComponent(){
		return initialRoute
	}
	static get getComponents(){
		return [
			initialRoute,
			PetCreationRoute,
			userSettingsRoute
		]
	}
}

export {petSelectionRoute, userSettingsRoute}
export default componentsConfig