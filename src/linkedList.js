// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;
  // linkedList.index = 0;

  linkedList.addToTail = function(val){
    if(linkedList.tail != null) {
        // if there is existing node
      linkedList[linkedList.tail++].next = linkedList.tail;
    } else {
        // if there is no existing node
      linkedList.head = 0;
      linkedList.tail = 0;
    }
    linkedList[linkedList.tail] = makeNode(val);
  };

  linkedList.removeHead = function(){
  };

  linkedList.contains = function(){
  };

  return linkedList;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;


  node.removeNextNode = function(){
  };

  return node;
};
