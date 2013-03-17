var makeTree = function(val){
  var tree = Object.create(treeMethods);
  tree.value = val;
  tree.children = [];
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var newtree = makeTree(val);
  this.children.push(newtree); 
};

treeMethods.contains = function(val){
  var found = false;

  var checkvalue = function(obj) {
    if (obj.children.length === 0) {
      found = (obj.value === val);
      if (found) {
        return found;
      }
    } else {
      for (var i = 0; i < obj.children.length; i++) {
        checkvalue(obj.children[i]);
        if (found) {
          return found;
        }
      }
    }
  };

  return checkvalue(this);
};