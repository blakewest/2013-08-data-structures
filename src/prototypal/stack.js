var Stack = function() {
  var newStack = Object.create(Stack.methods);
  newStack.storage = {};
  newStack.sizeCounter = 0;
  return newStack;
};

Stack.methods = {};

Stack.methods.push = function(value) {
  this.storage[this.sizeCounter] = value ;
  this.sizeCounter++;
};

Stack.methods.pop = function(){
  this.sizeCounter && this.sizeCounter--;
  var result = this.storage[this.sizeCounter];
  delete this.storage[this.sizeCounter];
  return result;
};

Stack.methods.size = function() {
  return this.sizeCounter;
};
