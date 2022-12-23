const today = new Date();

function helloSiri(command, name = 'Human') {
  if (name === 'Fedor') {
    throw Error("I'm sorry Fedor, I can't let you do that.");
  }

  if ((typeof command) !== 'string') {
    throw Error('Invalid Input - Unable to process.');
  }

  switch (command) {
    case ('Hello'):
      return `Hello ${name}.`;
    case ('What day is it?'):
      return today;
    case ("I'm feeling lucky"):
      return getRandom();
    case ('How do I become an amazing developer?'):
      return 'Google it!';
    default:
      return "I don't understand. Should I call your emergency contact number?";
  }
}


// // HELPER
function getRandom() {
  return Math.floor(Math.random() * (900)) + 100;
}

module.exports = { helloSiri };
