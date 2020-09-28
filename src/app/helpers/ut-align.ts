import { css } from '@emotion/core';
import { mapLabels } from '../../shared/styles-js/config/map-labels';

const alignHelper = (type: string, direction: string, breakpoint?: string) => {
  if (breakpoint) {
    //add breakpoint stuff
  } else {
    return `${type}-align: ${direction}`
  }
}
export const alignText = (direction: string) => {
  const DIRECTIONS = mapLabels.directions.general;
  switch (direction) {
    case DIRECTIONS.bottom:
      return css`
        labal: ut-align-vertical-bottom;
        ${alignHelper(DIRECTIONS.vertical, DIRECTIONS.bottom)}
      `;

  }
};

export const align = () => {

}