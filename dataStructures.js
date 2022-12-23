function searchInArray(array, element) {
  // your code here
  if (array.includes(element)) {
    return array.indexOf(element)
  }
  return undefined
}

function numbersInObject(phoneNumbers, name) {
  // your code here
  return phoneNumbers[name]
}

function nonRepeatingChar(word) {
  // your code here
  let letter;
  for (let i = 0; i < word.length; i++) {
    if (word[i]!== word[i + 1]) {
      letter = [i]
    }
  }
  return letter
}

module.exports = { searchInArray, numbersInObject, nonRepeatingChar };