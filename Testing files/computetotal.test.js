const totalcalc = require('./computetotal');
const calculateTotal = totalcalc.calculateTotal;
test('Total amount test 1', () => {
    expect(calculateTotal(1, 1, 1)).toBeCloseTo(190.77);
    });
test('Total amount test 2', () => {
    expect(calculateTotal(1, 2, 1)).toBeCloseTo(296.76);
    });
test('Total amount test 3', () => {
    expect(calculateTotal(1, 2, 3)).toBeCloseTo(360.34);
    });
