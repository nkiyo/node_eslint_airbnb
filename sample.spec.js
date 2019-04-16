const sum = require('./sum');

test('test sum', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
});
