const introToProgrammingModule = require('../../courses/intro_to_programming.js');

describe('intro_to_programming:', () => {
  describe('test diff(first, second)', () => {
    it('should return NaN with (0, -1)', () => {
      expect(introToProgrammingModule.diff(0, -1)).toBeNaN();
    });
    it('should return NaN with (0, 370)', () => {
      expect(introToProgrammingModule.diff(0, 370)).toBeNaN();
    });
    it('should return 45 with (0, 45)', () => {
      expect(introToProgrammingModule.diff(0, 45)).toBe(45);
    });
    it('should return 180 with (0, 180)', () => {
      expect(introToProgrammingModule.diff(0, 180)).toBe(180);
    });
    it('should return 170 with (0, 190)', () => {
      expect(introToProgrammingModule.diff(0, 190)).toBe(170);
    });
    it('should return 160 with (120, 280)', () => {
      expect(introToProgrammingModule.diff(120, 280)).toBe(160);
    });
    it('should return 0 with (0, 0)', () => {
      expect(introToProgrammingModule.diff(0, 0)).toBe(0);
    });
    it('should return 0 with (360, 360)', () => {
      expect(introToProgrammingModule.diff(360, 360)).toBe(0);
    });
    it('should return 360 with (0, 360)', () => {
      expect(introToProgrammingModule.diff(0, 360)).toBe(0);
    });
  });

  describe('test isPerfect(number)', () => {
    it('should return false with (-1)', () => {
      expect(introToProgrammingModule.isPerfect(-1)).toBeFalse();
    });
    it('should return false with (0)', () => {
      expect(introToProgrammingModule.isPerfect(0)).toBeFalse();
    });
    it('should return false with (1)', () => {
      expect(introToProgrammingModule.isPerfect(1)).toBeFalse();
    });
    it('should return false with (15)', () => {
      expect(introToProgrammingModule.isPerfect(15)).toBeFalse();
    });
    it('should return true with (6)', () => {
      expect(introToProgrammingModule.isPerfect(6)).toBeTrue();
    });
    it('should return true with (28)', () => {
      expect(introToProgrammingModule.isPerfect(28)).toBeTrue();
    });
    it('should return true with (496)', () => {
      expect(introToProgrammingModule.isPerfect(496)).toBeTrue();
    });
  });

  describe('test sumSquareDifference(n)', () => {
    it('should return NaN with (-1)', () => {
      expect(introToProgrammingModule.sumSquareDifference(-1)).toBeNaN();
    });
    it('should return NaN with (0)', () => {
      expect(introToProgrammingModule.sumSquareDifference(0)).toBeNaN();
    });
    it('should return 0 with (1)', () => {
      expect(introToProgrammingModule.sumSquareDifference(1)).toBe(0);
    });
    it('should return 2640 with (10)', () => {
      expect(introToProgrammingModule.sumSquareDifference(10)).toBe(2640);
    });
  });
});
