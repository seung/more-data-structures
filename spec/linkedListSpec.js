describe("linkedList", function() {
  var linkedList; 

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it('should have null head and tail if empty', function() {
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it('should throw error if removeHead from empty list', function(){
    expect(linkedList.removeHead).toThrow();
  });

  it('should return false if doesn\'t contain 3', function() {
    expect(linkedList.contains(3)).toEqual(false);
  });

  it('should add a new node to the end', function() {
    linkedList.addToTail(3);
    expect(linkedList.tail.value).toEqual(3);
    linkedList.addToTail(25);
    expect(linkedList.tail.value).toEqual(25);
  });

  it('should remove first node of linked list', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(25);
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(25);
  });

  it('should reset head and tail to null when all heads removed', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(25);
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should point head to third node after delete its next', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(25);
    linkedList.addToTail(837);
    linkedList.head.removeNextNode();
    expect(linkedList.head.next.value).toEqual(837);
  });

  it('should throw error if removeNext from last node', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(25);
    linkedList.addToTail(837);
    expect(function(){
      linkedList.tail.removeNextNode(); 
    }).toThrow(new Error("There is no next node."));
  });

  it('should return true if contains(4) is checked', function() {
    linkedList.addToTail(34);
    linkedList.addToTail(4);
    linkedList.addToTail(837);
    expect(linkedList.contains(4)).toBeTruthy;
  });
    
  it('should return false if contains(45) is checked', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(25);
    linkedList.addToTail(837);
    // debugger;
    expect(linkedList.contains(45)).toBeFalsy;
  });
    
  it('should return false if call contains(3) an empty linkedList', function() {
    expect(linkedList.contains(3)).toBeFalsy;
  });
});