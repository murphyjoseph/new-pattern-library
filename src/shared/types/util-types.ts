import ConstantsColors from '../styles/constants/constant-colors.module.scss'
import ConstantsBreakpoints from '../styles/constants/constant-breakpoints.module.scss'
import ConstantsLabelsSize from '../styles/constants/constant-size-labels.module.scss'
import ConstantsLabelsPosition from '../styles/constants/constant-direction-position-labels.module.scss'
import ConstantsLabelsDirection from '../styles/constants/constant-direction-labels.module.scss'
import ConstantsBranding from '../styles/constants/constant-branding.module.scss'
import ConstantsDirectionsSpacing from '../styles/constants/constant-size-spacing.module.scss'
import ConstantsTextPatterns from '../styles/constants/constant-text-pattern.module.scss'
import ConstantsColAuto from '../styles/constants/constant-col-auto.module.scss'
import ConstantsColPercent from '../styles/constants/constant-col-percent.module.scss'
import ConstantsColFixed from '../styles/constants/constant-col-width.module.scss'

export type TBreakpoints = (typeof ConstantsBreakpoints)[keyof typeof ConstantsBreakpoints]
export type TColors = (typeof ConstantsColors)[keyof typeof ConstantsColors]
export type TSizeLabels = (typeof ConstantsLabelsSize)[keyof typeof ConstantsLabelsSize]
export type TPositionLabels = (typeof ConstantsLabelsPosition)[keyof typeof ConstantsLabelsPosition]
export type TDirectionLabels = (typeof ConstantsLabelsDirection)[keyof typeof ConstantsLabelsDirection]
export type TBranding = (typeof ConstantsBranding)[keyof typeof ConstantsBranding]
export type TSpacingDirections = (typeof ConstantsDirectionsSpacing)[keyof typeof ConstantsDirectionsSpacing]
export type TTextPatterns = (typeof ConstantsTextPatterns)[keyof typeof ConstantsTextPatterns]
export type TColAuto = (typeof ConstantsColAuto)[keyof typeof ConstantsColAuto]
export type TColPercent = (typeof ConstantsColPercent)[keyof typeof ConstantsColPercent]
export type TColFixed = (typeof ConstantsColFixed)[keyof typeof ConstantsColFixed]

export type TAlignmentText = "left" | "right" | "center"
export type TDisplaySettings = "inline" | "inline-block" | "block" | "none";
export type TTextStyles = "bold" | "italic";
export type TColSizes = "auto1" | "auto2" | "auto3" | "auto4" | "auto5" | "auto6" | "auto7" | "auto8" | "auto9" | "auto10" | TSizeLabels | "percent10" | "percent20" | "percent25" | "percent33" | "percent40" | "percent50" | "percent66" | "percent75" | "percent100" | "none";
export type TGridType = "wrapper" | "column";
export type TGridDisplay = "flex" | "grid";
export type TWhiteSpace = "pre" | "preLine";
export type TPositionTypes = "absolute" | "relative" | "fixed" | "sticky" | "static" | "none" | "none";
export type TBtnSizes = "small" | "medium" | "large" | "default"
export type TUnitOfMeasurement = "em" | "rem" | "px" | "none"