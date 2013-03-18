var HashTable = function(){
  this._limit = 2;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
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
    }
  } else {
    this._storage[key] = aString;    
  }
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
// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
