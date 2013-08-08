var Queue = function() {
  this._storage = {};
  this._idx = 0;
  this._tracker = 0;
};

Queue.prototype.enqueue = function(value) {
	this._storage[this._idx] = value;
	this._idx++;
};

Queue.prototype.dequeue = function() {
	var result = this._storage[this._tracker];
	if( this._storage[this._tracker] ) this._tracker++;
	return result;
};

Queue.prototype.size = function() {
	return this._idx - this._tracker;
};
