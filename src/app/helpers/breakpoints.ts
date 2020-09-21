const unit = 'px';
const step = 5;
export const values: Record<string, number> = {
  breakpoint1: 250,
  breakpoint2: 560,
  breakpoint3: 850,
  breakpoint4: 1000,
  breakpoint5: 1100,
  breakpoint6: 1250,
  // breakpoint7  : '1400px',
  // breakpoint8  : '1750px',
  // breakpoint9  : '2000px',
  // breakpoint10 : '2200px',
  // main         : '1000px'
};

const keys = Object.keys(values);

export const up = (key: string | number) => {
  const value = typeof values[key] === 'number' ? values[key] : key;
  return `@media (min-width:${value}${unit})`;
}

export const down = (key: any) => {
  const endIndex = keys.indexOf(key) + 1;
  const upperbound = values[keys[endIndex]];

  if (endIndex === keys.length) {
    // down from the biggest breakpoint applies to all sizes
    return up(0);
  }

  const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
  return `@media (max-width:${value - step / 100}${unit})`;
}