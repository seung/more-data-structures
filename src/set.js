var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(aString){
  if (typeof aString === "string") {
    this._storage[aString] = true;
  } else {
    throw new Error("Only strings are permitted.");
  }
};

setPrototype.contains = function(aString){
  if(this._storage[aString]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(aString){
  delete this._storage[aString];
};
