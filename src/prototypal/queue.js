var Queue = function() {
  var newQueue = Object.create(Queue.methods);
  newQueue._storage = {};
  newQueue._idx = 0;
  newQueue._tracker = 0;
  return newQueue;
};

Queue.methods = {
  enqueue: function(value) {
    this._storage[this._idx] = value;
    this._idx++;
  },
  dequeue: function() {
    var result = this._storage[this._tracker];
    if(this._storage[this._tracker]) this._tracker++;
    return result;
  },
  size: function() {
    return this._idx - this._tracker;
  }
};


