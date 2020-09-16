export const mapLabels = {
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
  directions: {
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
    },
    positional: {
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
    spacing: {
      top        : 'top',
      right      : 'right',
      left       : 'left',
      bottom     : 'bottom',
      horizontal : 'horizontal',
      vertical   : 'vertical',
      all        : 'all'
    }
  }
}

export type TMapLabels = (typeof mapLabels)[keyof typeof mapLabels]
export type TLabelsSpacing = (typeof mapLabels.directions.spacing)[keyof typeof mapLabels.directions.spacing]
