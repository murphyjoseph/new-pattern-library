import { setSizes } from '../config/set-sizes';

describe('#setSizes', () => {
  let multiplier;
  let floor;
  let ceiling;
  let unitOfMeasurement;
  let params: any;
  beforeEach(() => {
    multiplier = 1;
    floor = 1;
    ceiling = 12;
    unitOfMeasurement = 'em';
    params = {
      multiplier,
      floor,
      ceiling,
      unitOfMeasurement,
    };
  })
  it('should handle if all params are given', () => {
    const expected: any = {
      size1: 1,
      size2: 1.92,
      size3: 2.84,
      size4: 3.76,
      size5: 4.68,
      size6: 5.6,
      size7: 6.52,
      size8: 7.44,
      size9: 8.36,
      size10: 9.28,
      size11: 10.2,
      size12: 11.12,
      unitOfMeasurement: 'em',
    };
    const actual = setSizes(params);
    expect(actual).toStrictEqual(expected);
  });
});