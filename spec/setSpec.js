describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it('should return true after adding a string', function() {
    set.add("Something");
    expect(set.contains("Something")).toBeTruthy;
  });

  it('should throw error if not a string', function() {
    expect(function() { 
      set.add(523); 
    }).toThrow(new Error("Only strings are permitted."));
  });

  it('should not add a duplicate string', function() {
    set.add("Something");
    set.add("Something");
    expect(set.contains("Something")).toBeTruthy;
  });

  it('should return false if search empty set for 3', function() {
    expect(set.contains('3')).toBeFalsy();
  });

  it('should delete a string from the set', function() {
    set.add("Something");
    set.add("Something else");
    set.remove("Something");
    expect(set.contains("Something")).toBeFalsy;
  });

});