// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function(val){
    var newNode = makeNode(val);
    if(linkedList.head == null) {
      linkedList.head = newNode;
    } else {
      var lastNode = linkedList.tail;
      lastNode.next = newNode;
    }
    linkedList.tail = newNode;
  };

  linkedList.removeHead = function(){
    if(linkedList.head) {
      var newHead = (linkedList.head).next;      
      delete linkedList.head;
      if (newHead == null) {
        linkedList.tail = null;
      }
      linkedList.head = newHead;
    } else {
      throw new Error("Cannot remove head from an empty list.");
    }
  };

  linkedList.contains = function(val){
    var nextNode = linkedList.head;
    while(nextNode) {
      if (nextNode.value === val) {
        return true;
      }
      nextNode = nextNode.next;
    }
    return false;
  };

  return linkedList;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;


  node.removeNextNode = function(){
    if (this.next == null) {
      throw new Error("There is no next node.");
    } else {
      var nextNode = this.next;
      var followingNode = (this.next).next
      delete this.next;
      this.next = followingNode;
    }
  };

  return node;
};