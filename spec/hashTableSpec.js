describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it('should retrieve value after inserting an item', function() {
    var some_string = "jonathan";
    hashTable.insert(some_string);
    expect(hashTable.retrieve(some_string)).toEqual(some_string);
  });


  it('should delete "jonathan" from storage', function() {
    var some_string = "jonathan";
    hashTable.insert(some_string);
    some_string = "marilyn";
    hashTable.insert(some_string);
    hashTable.remove("jonathan");
    expect(function(){ 
      hashTable.retrieve("jonathan");
    }).toThrow(new Error("Cannot retrieve string."));
  })

  it('should throw error retrieving a non-existant entry', function() {
    expect(function() {
      hashTable.retrieve("bugs bunny");
    }).toThrow(new Error("Cannot retrieve string."));
  })

  it('should throw error if overriding an entry', function() {
    var some_string = "jonathan"; //key evaluates to 5
    hashTable.insert(some_string);
    expect(function(){ 
      hashTable.insert("sally"); // key evaluates to 5
    }).toThrow(new Error("Insert collision."));
  })

  it('should throw error if duplicating an entry', function() {
    var some_string = "jonathan"; //key evaluates to 5
    hashTable.insert(some_string);
    expect(function(){ 
      hashTable.insert("jonathan"); // key evaluates to 5
    }).toThrow(new Error("Duplicate entry attempted."));
  })
});
