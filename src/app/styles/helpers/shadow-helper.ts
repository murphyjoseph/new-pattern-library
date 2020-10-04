const DIRECTIONS = {
  ALL: 'all',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top'
};
export const styleShadow = (shadow: any): string => {
  if (shadow.size && shadow.direction) {
    return `box-shadow: -${shadow.size} 0 3px 0 rgba(0,0,0,.16)`;
  }
  return '';
}