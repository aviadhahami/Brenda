/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'

import PetSelection from './../PetSelection/PetSelection'
let initialRoute = { component: <PetSelection />, title:'Pet Selection', index: 0 }

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