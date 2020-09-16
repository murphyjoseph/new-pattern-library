// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      global          : string,
      globalLight1    : string,
      globalDark1     : string,
      primary         : string,
      primaryLight1   : string,
      primaryDark1    : string,
      secondary       : string,
      secondaryLight1 : string,
      secondaryDark1  : string,
      success         : string,
      successLight1   : string,
      successDark1    : string,
      disabled        : string,
      disabledLight1  : string,
      disabledDark1   : string,
      warning         : string,
      warningLight1   : string,
      warningDark1    : string,
      info            : string,
      infoLight1      : string,
      infoDark1       : string,
      white           : string,
      black           : string,
      neutral         : string,
      neutralLight1   : string,
      neutralLight2   : string,
      neutralLight3   : string,
      neutralDark1    : string,
      neutralDark2    : string,
      neutralDark3    : string,
    }
  }
}