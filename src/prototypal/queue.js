var Queue = function() {
  var newQueue = Object.create(Queue.methods);
  newQueue.storage = {};
  newQueue.idx = 0;
  newQueue.tracker = 0;
  return newQueue;
};

Queue.methods = {
	enqueue: function(value) {
		this.storage[this.idx] = value;
		this.idx++;
	},
	dequeue: function() {
		var result = this.storage[this.tracker];
		if(this.storage[this.tracker]) this.tracker++;
		return result;
	},
	size: function() {
		return this.idx - this.tracker;
	}
};


