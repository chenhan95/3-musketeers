const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      var i = 0;
      for( i = 0; i < starWarsNames.length; i++)
        {
            expect(typeof(starWarsNames[i])).toBe("string");
        }
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain('Luke Skywalker');
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all).not.toContain('Ben Quadinaros');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
        expect(starWars.all).toContain(starWars.random())
    });

    test('should return an array of random items if passed a number', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });


});
