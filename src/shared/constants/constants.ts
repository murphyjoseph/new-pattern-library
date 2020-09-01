import * as ConstantsColors from '../../styles/constants/constant-colors.module.scss';
import * as ConstantsBreakpoints from '../../styles/constants/constant-breakpoints.module.scss';
import * as ConstantsLabelsSize from '../../styles/constants/constant-size-labels.module.scss';
import * as ConstantsLabelsPosition from '../../styles/constants/constant-direction-position-labels.module.scss';
import * as ConstantsLabelsDirection from '../../styles/constants/constant-direction-labels.module.scss';
import * as ConstantsBranding from '../../styles/constants/constant-branding.module.scss';
import * as ConstantsDirectionsSpacing from '../../styles/constants/constant-size-spacing.module.scss';
import * as ConstantsTextPatterns from '../../styles/constants/constant-text-pattern.module.scss';
import * as ConstantsSizesFont from '../../styles/constants/constant-size-fonts.module.scss';
import * as ConstantsSizesSpacing from '../../styles/constants/constant-size-spacing.module.scss';

export const Constants = {
  colors: ConstantsColors,
  breakpoints: ConstantsBreakpoints,
  labels: {
    size: ConstantsLabelsSize,
    direction: ConstantsLabelsDirection,
    position: ConstantsLabelsPosition,
    spacing: ConstantsDirectionsSpacing
  },
  sizes: {
    fonts: ConstantsSizesFont,
    spacing: ConstantsSizesSpacing
  },
  branding: ConstantsBranding,
  textPatterns: ConstantsTextPatterns
};