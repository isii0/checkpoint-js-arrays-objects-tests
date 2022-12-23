const { helloSiri } = require('../helloSiri.js');

// /////////////////////
//   Release: 1   ////
// ////////////////////


describe('.helloSiri - tests', () => {
  it('if the command is unknown offers to call an emergency contact', () => {
    expect(helloSiri('fluffernuffer', 'Dave')).toBe("I don't understand. Should I call your emergency contact number?");
  });
  it('returns a random number if you feel lucky', () => {
    expect(typeof helloSiri("I'm feeling lucky", 'Mike')).toBe('number');
  });
  it('gives a greeting', () => {
    expect(helloSiri('Hello', 'Ivan')).toBe('Hello Ivan.');
  });
  it('tells which day is it', () => {
    expect(typeof helloSiri('What day is it?', 'Jesus')).toBe('object');
  });
  it('offers to google how to be a developer', () => {
    expect(helloSiri('How do I become an amazing developer?', 'Oleg')).toBe('Google it!');
  });
});
