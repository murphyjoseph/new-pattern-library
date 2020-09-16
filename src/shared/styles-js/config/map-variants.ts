import { mapBranding } from './map-branding';
import { mapFontTypes } from './map-font-types';

let variantsText = {}
let variantsOutline = {}
let variantsDisabled = {}

for (let key of Object.keys(mapBranding)) {
  Object.assign(variantsText, {[`${key}Text`]: `${key}-text`});
  Object.assign(variantsOutline, {[`${key}Outline`]: `${key}-outline`});
  Object.assign(variantsDisabled, {[`${key}Disabled`]: `${key}-disabled`});
}

export const mapVariants = {
  buttons: {
    ...mapBranding,
    ...variantsText,
    ...variantsOutline,
    ...variantsDisabled
  },
  links: {
    ...mapBranding,
    ...variantsDisabled
  },
  text: {
    headingOne   : mapFontTypes.level1,
    headingTwo   : mapFontTypes.level1,
    headingThree : mapFontTypes.level1,
    titleOne     : mapFontTypes.level4,
    titleTwo     : mapFontTypes.level4,
    bodyOne      : mapFontTypes.level5,
    bodyTwo      : mapFontTypes.level5,
    description  : mapFontTypes.level5,
    list         : mapFontTypes.level4,
    btn          : mapFontTypes.level4,
    link         : mapFontTypes.level4,
    labelOne     : mapFontTypes.level4,
    labelTwo     : mapFontTypes.level5,
    input        : mapFontTypes.level4,
    placeholder  : mapFontTypes.level4,
    icon         : mapFontTypes.level1,
    option       : mapFontTypes.level4,
    invalid      : mapFontTypes.level4,
    counter      : mapFontTypes.level5,
    figcaption   : mapFontTypes.level4
  }
}