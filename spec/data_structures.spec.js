const { searchInArray, numbersInObject, nonRepeatingChar } = require('../dataStructures.js');

// /////////////////////
//   Release: 0   ////
// ////////////////////

describe('.searchInArray', () => {
  const numbered_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const letters_array = ['a', 'b', 'c', 'd'];

  it('returns the index of the element - 1', () => {
    expect(searchInArray(numbered_array, 1)).toEqual(0);
  });
  it('returns the index of the element - 10', () => {
    expect(searchInArray(numbered_array, 10)).toEqual(9);
  });
  it('returns the index of the element - a', () => {
    expect(searchInArray(letters_array, 'a')).toEqual(0);
  });

  it('returns undefined if the element is not found - 11', () => {
    expect(searchInArray(numbered_array, 11)).toBe(undefined);
  });
  it('returns undefined if the element is not found - z', () => {
    expect(searchInArray(letters_array, 'z')).toBe(undefined);
  });
});

describe('numbersInObject', () => {
  const inputObjects = {
    betty: '904-294-1390',
    tom: '387-122-8976',
    ally: '549-890-1029',
    jimmy: '432-897-8120',
  };

  it('returns the correct number for a given key', () => {
    expect(numbersInObject(inputObjects, 'betty')).toEqual('904-294-1390');
  });
  it('returns the correct number for a given key', () => {
    expect(numbersInObject(inputObjects, 'tom')).toEqual('387-122-8976');
  });

  it('returns undefined when the given search is not found', () => {
    expect(numbersInObject(inputObjects, 'tim')).toBe(undefined);
  });
});

// //////////////////////
// / stretch release  //
// /////////////////////

describe('.nonRepeatingChar', () => {
  xit('returns the first character which is not repeated in a string', () => {
    expect(nonRepeatingChar('yellow')).toEqual('y');
    expect(nonRepeatingChar('tooth')).toEqual('h');
    expect(nonRepeatingChar('wallawallabingbang')).toEqual('i');
  });
});
