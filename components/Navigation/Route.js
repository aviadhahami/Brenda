/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'

class Route{
	constructor(index,title,name,component){
		this._index = index;
		this._title = title;
		this._name = name;
		this._component = component;
		
	}
	get name(){
		return this._name;
	}
	get index(){
		return this._index;
	}
	get title(){
		return this._title;
	}
	get component(){
		return this._component
	}
}

export default Route;