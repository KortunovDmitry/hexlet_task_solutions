const assert = require('assert');
const { diff } = require('../intro_to_programming.js');

describe('intro_to_programming:', () => {
  describe('test diff(first, second)', () => {
    it('should return 45 with (0, 45)', () => {
      assert.equal(diff(0, 45), 45);
    });
    it('should return 180 with (0, 180)', () => {
      assert.equal(diff(0, 180), 180);
    });
    it('should return 170 with (0, 190)', () => {
      assert.equal(diff(0, 190), 170);
    });
    it('should return 160 with (120, 280)', () => {
      assert.equal(diff(120, 280), 160);
    });
  });
});
