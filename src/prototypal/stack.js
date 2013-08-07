var Stack = function() {
  var newStack = Object.create(Stack.methods);
  newStack._storage = {};
  newStack._sizeCounter = 0;
  return newStack;
};

Stack.methods = {};

Stack.methods.push = function(value) {
  this._storage[this._sizeCounter] = value ;
  this._sizeCounter++;
};

Stack.methods.pop = function(){
  this._sizeCounter && this._sizeCounter--;
  var result = this._storage[this._sizeCounter];
  delete this._storage[this._sizeCounter];
  return result;
};

Stack.methods.size = function() {
  return this._sizeCounter;
};
