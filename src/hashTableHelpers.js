var makeLimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){
      throw new Error('setter requires a numeric index for its first argument'); 
    };
    if(limit <= index){
      throw new Error('Error trying to access an over-the-limit index');
    };
  };

  return limitedArray;
};

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};
