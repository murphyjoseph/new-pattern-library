import { themeCss } from '../../themeCss';
import { TBranding } from '../../types/util-types';

export const mixinLink: any = (brand: TBranding) => (
  {
    textDecoration: "none",
    $nest: {
      '.kitter_text': {
        textDecoration: "underline",
        color: themeCss.color[brand],
        '&:hover': {
          color: themeCss.color[`${brand}Light1`],
          transition: "200ms",
          textDecoration: "none"
        }
      },
      '&:visited': {
        '.kitter_text': {
          color: "red"
        }
      }
    }
  }
)

export const cssLinkVariant: any = {
  global:    { ...mixinLink('global')    },
  primary:   { ...mixinLink('primary')   },
  secondary: { ...mixinLink('secondary') },
  neutral:   { ...mixinLink('neutral')   },
  warning:   { ...mixinLink('warning')   },
  info:      { ...mixinLink('info')      },
  disabled:  { ...mixinLink('disabled')  },
  inactive:  { ...mixinLink('inactive')  }
}
