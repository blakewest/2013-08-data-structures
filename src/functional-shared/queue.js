var makeQueue = function(){
  var newQueue = {};
  newQueue.storage = {};
  newQueue.idx = 0;
  newQueue.tracker = 0;
  _.extend(newQueue, makeQueue.methods);
  return newQueue;
};

makeQueue.methods = {};

makeQueue.methods.enqueue = function(value){
  this.storage[this.idx] = value;
  this.idx++;
};

makeQueue.methods.dequeue = function(){
  var result = this.storage[this.tracker];
  this.storage[this.tracker] && this.tracker++;
  return result;
};

makeQueue.methods.size = function(){
  return this.idx-this.tracker;
};