import { css } from '@emotion/core';
import { StyleSheet } from 'aphrodite';
import { mapLabels } from '../../shared/styles-js/config/map-labels';

const DIRECTIONS: any = mapLabels.directions.general;

export const alignVertical = (direction: string) => {
  return css`
    labal: ut_align_vertical_${direction};
    vertical-align: ${DIRECTIONS[direction]}
  `;

};

export const alignVerticalA = StyleSheet.create({
  'ut_align_vertical_bottom': {
    verticalAlign: `${DIRECTIONS.bottom}`
  },
  'ut_align_vertical_top': {
    verticalAlign: `${DIRECTIONS.top}`
  },
  middle: {
    verticalAlign: `${DIRECTIONS.middle}`,
  }
});

export const alignTextA = StyleSheet.create({
  alignTextRight: {
    textAlign: 'right',
    '& h1, h2, p, div': {
      textAlign: 'right',
      color: 'lightblue'
    }
  }
});