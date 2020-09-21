export const applyCss = (styleObject: any, styles: any) => {
  if (!!styleObject.css) {
    styleObject.css.internal = styles;
  } else {
    styleObject.css = {}
    styleObject.css.internal = styles;
  }
  return styleObject;
}