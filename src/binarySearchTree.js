var makeBinarySearchTree = function(val){
  var bst = Object.create(bstMethods);
  bst.value = val;
  bst.leftNode;
  bst.rightNode;
  return bst;
};

var bstMethods = {
  insert: function(val) {
    var newNode = makeBinarySearchTree(val);
    var addNode = function(obj, newNode) {
      if (obj.value > newNode.value) {
        obj.leftNode = newNode;
      } else if (obj.value < newNode.value){
        obj.rightNode = newNode;
      } else {
        throw new Error("Value already is in tree.");
      };
    };
    var myFunc = function() {
      addNode(this,newNode);
    };
    this.depthFirstLog(myFunc);
  }
};

bstMethods.depthFirstLog = function(func) {
  var traverse = function(obj, func) {
    if (!obj.leftNode && !obj.rightNode) {
      func(obj);
    } else {
      (obj.leftNode) && traverse(obj.leftNode, func);
      (obj.rightNode) && traverse(obj.rightNode, func);
    };
  };
  traverse(this, func);
};
