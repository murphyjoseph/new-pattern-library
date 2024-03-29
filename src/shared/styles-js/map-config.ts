export const stylesConfig = {
  labels: {
    sizes: {
      size1  : 'size1',
      size2  : 'size2',
      size3  : 'size3',
      size4  : 'size4',
      size5  : 'size5',
      size6  : 'size6',
      size7  : 'size7',
      size8  : 'size8',
      size9  : 'size9',
      size10 : 'size10',
      size11 : 'size11',
      size12 : 'size12'
    },
    branding: {
      global    : 'global',
      primary   : 'primary',
      secondary : 'secondary',
      neutral   : 'neutral',
      warning   : 'warning',
      info      : 'info',
      disabled  : 'disabled',
      inactive  : 'inactive',
    },
    directions: {
      positions: {
        center              : 'center',
        centerVertical      : 'center-vertical',
        centerVerticalLeft  : 'center-vertical-left',
        centerVerticalRight : 'center-vertical-right',
        centerHorizontal    : 'center-horizontal',
        centerBlock         : 'center-block',
        top                 : 'top',
        topRight            : 'top-right',
        topLeft             : 'top-left',
        left                : 'left',
        right               : 'right',
        bottom              : 'bottom',
        bottomRight         : 'bottom-right',
        bottomLeft          : 'bottom-left'
      },
      general: {
        all         : 'all',
        bottom      : 'bottom',
        bottomLeft  : 'bottom-left',
        bottomRight : 'bottom-right',
        horizontal  : 'horizontal',
        left        : 'left',
        right       : 'right',
        top         : 'top',
        topLeft     : 'top-left',
        topRight    : 'top-right',
        vertical    : 'vertical',
        center      : 'center',
        middle      : 'middle'
      }
    },
  },
  colors: {
    global          : "hsla(0, 0%, 15%, 1)",
    globalLight1    : "hsla(0, 0%, 25%, 1)",
    globalDark1     : "hsla(0, 0%, 5%, 1)",
    primary         : "hsla(200, 37%, 52%, 1)",
    primaryLight1   : "hsla(200, 37%, 60%, 1)",
    primaryDark1    : "hsla(200, 37%, 44%, 1)",
    secondary       : "hsla(200, 37%, 52%, 1)",
    secondaryLight1 : "hsla(200, 37%, 60%, 1)",
    secondaryDark1  : "hsla(200, 37%, 44%, 1)",
    success         : "hsla(83, 46%, 47%, 1)",
    successLight1   : "hsla(83, 46%, 58%, 1)",
    successDark1    : "hsla(83, 46%, 36%, 1)",
    disabled        : "hsla(0, 0%, 87%, 1)",
    disabledLight1  : "hsla(0, 0%, 95%, 1)",
    disabledDark1   : "hsla(0, 0%, 76%, 1)",
    warning         : "hsla(7, 66%, 57%, 1)",
    warningLight1   : "hsla(7, 66%, 72%, 1)",
    warningDark1    : "hsla(7, 66%, 46%, 1)",
    info            : "hsla(39, 100%, 71%, 1)",
    infoLight1      : "hsla(39, 100%, 80%, 1)",
    infoDark1       : "hsla(39, 100%, 62%, 1)",
    white           : "hsla(0, 100%, 100%, 1)",
    black           : "hsla(0, 0%, 0%, 1)",
    neutral         : "hsla(0, 0%, 60%, 1)",
    neutralLight1   : "hsla(0, 0%, 90%, 1)",
    neutralLight2   : "hsla(0, 0%, 93%, 1)",
    neutralLight3   : "hsla(0, 0%, 95%, 1)",
    neutralDark1    : "hsla(0, 0%, 33%, 1)",
    neutralDark2    : "hsla(0, 0%, 25%, 1)",
    neutralDark3    : "hsla(0, 0%, 22%, 1)",
  },
  size: {
    floor   : .25,
    ceiling : 3
  },
  fontTypes: {
    level1: [{fontFamily: 'sans-serif'}, {fontSize: 'size10'}],
    level2: [{fontFamily: 'sans-serif'}, {fontSize: 'size8'}],
    level3: [{fontFamily: 'sans-serif'}, {fontSize: 'size6'}],
    level4: [{fontFamily: 'sans-serif'}, {fontSize: 'size3'}],
    level5: [{fontFamily: 'sans-serif'}, {fontSize: 'size2'}]
  },
  breakpoints: {
    ems    : {breakpoint3: '13px', breakpoint4: '13px', breakpoint6: "13px"},
    mobile : "breakpoint6"
  }
}

export const stylesText = {
  headingOne   : stylesConfig.fontTypes.level1,
  headingTwo   : stylesConfig.fontTypes.level1,
  headingThree : stylesConfig.fontTypes.level1,
  titleOne     : stylesConfig.fontTypes.level4,
  titleTwo     : stylesConfig.fontTypes.level4,
  bodyOne      : stylesConfig.fontTypes.level5,
  bodyTwo      : stylesConfig.fontTypes.level5,
  description  : stylesConfig.fontTypes.level5,
  list         : stylesConfig.fontTypes.level4,
  btn          : stylesConfig.fontTypes.level4,
  link         : stylesConfig.fontTypes.level4,
  labelOne     : stylesConfig.fontTypes.level4,
  labelTwo     : stylesConfig.fontTypes.level5,
  input        : stylesConfig.fontTypes.level4,
  placeholder  : stylesConfig.fontTypes.level4,
  icon         : stylesConfig.fontTypes.level1,
  option       : stylesConfig.fontTypes.level4,
  invalid      : stylesConfig.fontTypes.level4,
  counter      : stylesConfig.fontTypes.level5,
  figcaption   : stylesConfig.fontTypes.level4
}
