/**
 * Created by aviad on 8/13/2016.
 */

import React from 'react'

class Route{
	constructor(index,title,component){
		this._index = index;
		this._title = title;
		this._component = component;
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