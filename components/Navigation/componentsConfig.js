/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'
import { Text } from 'react-native'
class componentsConfig{
	static get getInitialComponent(){
		return { title: 'Awesome Scene', index: 0, component: <Text>Hi there!</Text> }
	}
	static get getComponents(){
		return [
			
		]
	}
}

export default componentsConfig