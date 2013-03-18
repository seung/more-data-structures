describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree(5);
  });

  it("should have methods named 'addChild' and 'contains'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  it("should create a tree object", function() {
    expect(tree);
    expect(tree.value).toEqual(5);
  });

  it("should return the value of the first child", function() {
    tree.addChild(3);
    expect(tree.children[0].value).toEqual(3);
  });
  
  it("should return true if checking for 6", function() {
    tree.addChild(3);
    tree.addChild(6);
    expect(tree.contains(6)).toBeTruthy();
  });
  
  it("should return false if checking for 43", function() {
    tree.addChild(3);
    tree.addChild(6);
    expect(tree.contains(43)).toBeFalsy();
  });
});
