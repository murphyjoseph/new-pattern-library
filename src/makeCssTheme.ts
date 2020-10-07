import omit from 'lodash/omit';

const helper = (obj: any, namespace: any) => {
  return Object.entries(obj).reduce(
    (cssTheme, [key, value]) => {
      return {
        ...cssTheme,
        [`--${namespace}-${key}`]: value
      }
    },
    {}
  );
}
export const makeCssTheme = (jsTheme: any, namespace: any) => {
  console.log(jsTheme);
  const { name } = jsTheme;
  const theme = omit(jsTheme, ['name']);
  const reducedTheme: any = Object.entries(theme).reduce(
    (cssTheme, [key, value]) => {
      const val = helper(value, key);
      return {
        ...cssTheme,
        ...val,
      }
    },
    {}
  );
  reducedTheme.name = name;
  return reducedTheme;
}