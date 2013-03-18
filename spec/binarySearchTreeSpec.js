describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(10);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  // it('should traverse a tree with two children', function() {
  //   binarySearchTree.leftNode = makeBinarySearchTree(6);
  //   binarySearchTree.rightNode = makeBinarySearchTree(15);
  //   binarySearchTree.depthFirstLog(function() {console.log("node value: " + this.value);});
  // });

  // it('should traverse a tree with no children', function() {
  //   binarySearchTree.depthFirstLog(function() {console.log("node value: " + this.value);});
  // });

  it('should add 7 as a left node', function() {
    binarySearchTree.insert(7);
  });

  // it('should add 20 as a right node', function() {
  //   binarySearchTree.insert(20);
  // });

  // it('should traverse a tree with only left node', function() {
  //   binarySearchTree.leftNode = makeBinarySearchTree(6);
  //   binarySearchTree.depthFirstLog(function() {console.log("node value: " + this.value);});
  // });

  // it('should traverse a tree with only right node', function() {
  //   binarySearchTree.rightNode = makeBinarySearchTree(15);
  //   binarySearchTree.depthFirstLog(function() {console.log("node value: " + this.value);});
  // });

  // add more tests here to test the functionality of binarySearchTree
});
