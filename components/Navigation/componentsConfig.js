/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'
import Route from './Route'

import PetSelection from './../PetSelection/PetSelection'
let initialRoute = new Route(0,'Pet Selection', <PetSelection />);

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