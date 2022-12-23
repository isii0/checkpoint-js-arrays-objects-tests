const { helloSiri } = require('../helloSiri.js');

// /////////////////////
//   Release: 1   ////
// ////////////////////


describe('.helloSiri - tests', () => {
  it('test #0', () => {
    expect(helloSiri('fluffernuffer', 'Dave')).toBe("I don't understand. Should I call your emergency contact number?");
  });
});
