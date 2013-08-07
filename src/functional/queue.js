var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var idx = 0; 
  var tracker = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[idx] = value;
    idx++;
  };

  queue.dequeue = function(){
    var result = storage[tracker];
    storage[tracker] && tracker++;
    return result;
  };

  queue.size = function(){
    return idx-tracker;
  };

  return queue;
};
