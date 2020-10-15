import { theme } from '../../theme';
import { TColorCore } from '../../types/util-types';

export const mixinLink: any = (brand: TColorCore) => (
  {
    textDecoration : "underline",
    color          : theme.color[brand],
    '&:hover': {
      color          : theme.color[`${brand}Light1`],
      transition     : "200ms",
      textDecoration : "none"
    },
    '&:visited': {
      '.kitter_text': {
        color: "red"
      }
    }
  }
)

export const cssLinkVariant: any = {
  global    : { ...mixinLink('global')    },
  primary   : { ...mixinLink('primary')   },
  secondary : { ...mixinLink('secondary') },
  neutral   : { ...mixinLink('neutral')   },
  warning   : { ...mixinLink('warning')   },
  info      : { ...mixinLink('info')      },
  disabled  : { ...mixinLink('disabled')  },
  inactive  : { ...mixinLink('inactive')  }
}

// https://typestyle.github.io/#/advanced/concept-ordering-pseudo-classes
// A common pattern is sytling anchors using LVHA-order:

// const anchorClass = style({
//   $nest: {
//     '&:link': { color: 'blue' },
//     '&&:visited': { color: 'purple' },
//     '&&&:hover': { fontWeight: 'bold' },
//     '&&&&:active': { color: 'lime' },
//   },
// });

// <a
//   className={anchorClass}
//   href='https://typestyle.github.io/'
//   target='_blank'>TypeStyle</a>;