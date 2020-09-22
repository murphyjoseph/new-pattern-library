import { IStylesSpacing } from "../../shared/interfaces/styles.interface";

const DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  ALL: 'all',
};

// obvi move this to its own thing
const getSize = (size: any) => {
  const sizes: any = {
    size3: '1.3rem',
    size4: '1.55rem',
  }
  return sizes[size];
}
const setDirection = (direction: any, size: any) => {
  const s = getSize(size);
  switch (direction) {
    case DIRECTIONS.LEFT:
      return {
        paddingLeft: s,
      };
    case DIRECTIONS.RIGHT:
      return {
        paddingRight: s,
      };
    case DIRECTIONS.HORIZONTAL:
      return {
        padding: `0 ${s}`,
      };
    case DIRECTIONS.VERTICAL:
      return {
        padding: `${s} 0`,
      };
    case DIRECTIONS.ALL:
      return {
        padding: `${s}`,
      };
  }
}

const setDirectionStyled = (direction: any, size: any) => {
  const s = getSize(size);
  switch (direction) {
    case DIRECTIONS.LEFT:
      return `padding-left: ${s};`;
    case DIRECTIONS.RIGHT:
      return `padding-right: ${s};`;
    case DIRECTIONS.HORIZONTAL:
      return `padding: 0 ${s};`;
    case DIRECTIONS.VERTICAL:
      return `padding: ${s} 0;`;
    case DIRECTIONS.ALL:
      return `padding: ${s};`;
  }
}
export const stylePadding = (padding: IStylesSpacing) => {
  const {
    direction,
    size,
    // breakpointName,
    // breakpointDirection 
  } = padding;
  return {
    ...setDirection(direction, size),
  }
}

export const getPaddingStyled = (padding: any) => {
  const {
    direction,
    size,
    // breakpointName,
    // breakpointDirection 
  } = padding;
  return setDirectionStyled(direction, size);
}


