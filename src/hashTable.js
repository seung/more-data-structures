var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(aString){
  var key = this.fetchKey(aString);
  if(this._storage[key]) {
    if(this._storage[key] === aString) {
      throw new Error("Duplicate entry attempted.");
    } else {
      console.log("running collision resolution");
      throw new Error("Insert collision.");
    };
  } else {
    this._storage[key] = aString;
  };
};

HashTable.prototype.retrieve = function(aString){
  var key = this.fetchKey(aString);
  if (this._storage[key] === undefined) {
    throw new Error("Cannot retrieve string.");
  } else {
    return this._storage[key];
  };
};

HashTable.prototype.remove = function(aString){
  var key = this.fetchKey(aString);
  if (this._storage[key] === undefined) {
    throw new Error("String does not exist.");
  } else {
    delete this._storage[key];
  };
}

HashTable.prototype.fetchKey = function(aString) {
  return getIndexBelowMaxForKey(aString, this._limit);
};
