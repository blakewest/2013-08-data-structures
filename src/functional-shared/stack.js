var makeStack = function(){
  var newStack = {};
  newStack.storage = {};
  newStack.sizeCounter = 0;
  _.extend(newStack, makeStack.methods);
  return newStack;
};

makeStack.methods = {};

makeStack.methods.push = function(value) {
  this.storage[this.sizeCounter] = value ;
  this.sizeCounter++;
};

makeStack.methods.pop = function(){
  this.sizeCounter && this.sizeCounter--;
  var result = this.storage[this.sizeCounter];
  delete this.storage[this.sizeCounter];
  return result;
};

makeStack.methods.size = function() {
  return this.sizeCounter;
};