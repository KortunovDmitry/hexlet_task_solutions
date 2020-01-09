const assert = require('assert');
const introToProgrammingModule = require('../intro_to_programming.js');

describe('intro_to_programming:', () => {
  describe('test diff(first, second)', () => {
    it('should return NaN with (0, -1)', () => {
      assert.ok(Number.isNaN(introToProgrammingModule.diff(0, -1)));
    });
    it('should return NaN with (0, 370)', () => {
      assert.ok(Number.isNaN(introToProgrammingModule.diff(0, 370)));
    });
    it('should return 45 with (0, 45)', () => {
      assert.equal(introToProgrammingModule.diff(0, 45), 45);
    });
    it('should return 180 with (0, 180)', () => {
      assert.equal(introToProgrammingModule.diff(0, 180), 180);
    });
    it('should return 170 with (0, 190)', () => {
      assert.equal(introToProgrammingModule.diff(0, 190), 170);
    });
    it('should return 160 with (120, 280)', () => {
      assert.equal(introToProgrammingModule.diff(120, 280), 160);
    });
    it('should return 0 with (0, 0)', () => {
      assert.equal(introToProgrammingModule.diff(0, 0), 0);
    });
    it('should return 0 with (360, 360)', () => {
      assert.equal(introToProgrammingModule.diff(360, 360), 0);
    });
    it('should return 360 with (0, 360)', () => {
      assert.equal(introToProgrammingModule.diff(0, 360), 0);
    });
  });

  describe('test isPerfect(number)', () => {
    it('should return false with (-1)', () => {
      assert.ok(!introToProgrammingModule.isPerfect(-1));
    });
    it('should return false with (0)', () => {
      assert.ok(!introToProgrammingModule.isPerfect(0));
    });
    it('should return false with (1)', () => {
      assert.ok(!introToProgrammingModule.isPerfect(1));
    });
    it('should return false with (15)', () => {
      assert.ok(!introToProgrammingModule.isPerfect(15));
    });
    it('should return true with (6)', () => {
      assert.ok(introToProgrammingModule.isPerfect(6));
    });
    it('should return true with (28)', () => {
      assert.ok(introToProgrammingModule.isPerfect(28));
    });
    it('should return true with (496)', () => {
      assert.ok(introToProgrammingModule.isPerfect(496));
    });
  });

  describe('test sumSquareDifference(n)', () => {
    it('should return NaN with (-1)', () => {
      assert.ok(Number.isNaN(introToProgrammingModule.sumSquareDifference(-1)));
    });
    it('should return NaN with (0)', () => {
      assert.ok(Number.isNaN(introToProgrammingModule.sumSquareDifference(0)));
    });
    it('should return 0 with (1)', () => {
      assert.equal(introToProgrammingModule.sumSquareDifference(1), 0);
    });
    it('should return 2640 with (10)', () => {
      assert.equal(introToProgrammingModule.sumSquareDifference(10), 2640);
    });
  });
});
