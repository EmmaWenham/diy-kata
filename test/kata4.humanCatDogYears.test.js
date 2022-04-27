const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    it('returns array with numbers representing human years, cat years and dog years', () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
        expect(humanCatDogYears(7)).toEqual([7, 44, 49])
    });
});
// Look Ma, no handlebars!!!
