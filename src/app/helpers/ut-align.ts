import { css } from '@emotion/core';
import { StyleSheet } from 'aphrodite';
import { mapLabels } from '../../shared/styles-js/config/map-labels';

export const alignVertical = (direction: string) => {
  const DIRECTIONS: any = mapLabels.directions.general;
  return css`
    labal: ut_align_vertical_${direction};
    vertical-align: ${DIRECTIONS[direction]}
  `;

};

export const alignVerticalA = () => {
  const DIRECTIONS: any = mapLabels.directions.general;
  return StyleSheet.create({
    'ut_align_vertical_bottom': {
      verticalAlign: `${DIRECTIONS.bottom}`
    },
    'ut_align_vertical_top': {
      verticalAlign: `${DIRECTIONS.top}`
    }
  })
}