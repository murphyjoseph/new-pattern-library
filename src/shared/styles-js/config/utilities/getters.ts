import { mapSizes } from '../map-sizes';
import { TSizeLabels } from '../../../types/util-types';

export const getSizePadding = (size: TSizeLabels) => {
  return mapSizes.spacing[size]
}