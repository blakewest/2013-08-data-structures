var Stack = function() {
  this._storage = {};
  this._sizeCounter = 0;
};

Stack.prototype.push = function(value) {
	this._storage[this._sizeCounter] = value;
	this._sizeCounter++;
};

Stack.prototype.pop = function() {
	this._sizeCounter && this._sizeCounter--;
	var result = this._storage[this._sizeCounter];
	delete this._storage[this._sizeCounter];
	return result;
};

Stack.prototype.size = function() {
	return this._sizeCounter;
};
