
export type TBreakpoints =
 'breakpoint1'  |
 'breakpoint2'  |
 'breakpoint3'  |
 'breakpoint4'  |
 'breakpoint5'  |
 'breakpoint6'  |
 'breakpoint7'  |
 'breakpoint8'  |
 'breakpoint9'  |
 'breakpoint10' |
 'breakpoint11' |
 'breakpoint12' |
 'main'

export type TColors =
 'black'           |
 'disabled'        |
 'disabledDark1'   |
 'disabledLight1'  |
 'failure'         |
 'failureDark1'    |
 'failureLight1'   |
 'global'          |
 'globalDark1'     |
 'globalLight1'    |
 'loading'         |
 'loadingDark1'    |
 'loadingLight1'   |
 'neutral'         |
 'neutralDark1'    |
 'neutralDark2'    |
 'neutralLight1'   |
 'neutralLight2'   |
 'neutralLight3'   |
 'neutralLight4'   |
 'info'            |
 'infoDark1'       |
 'infoLight1'      |
 'none'            |
 'primary'         |
 'primaryDark1'    |
 'primaryLight1'   |
 'secondary'       |
 'secondaryDark1'  |
 'secondaryLight1' |
 'tertiary'        |
 'tertiaryDark1'   |
 'tertiaryLight1'  |
 'shadow'          |
 'success'         |
 'successDark1'    |
 'successLight1'   |
 'transparent'     |
 'warning'         |
 'warningDark1'    |
 'warningLight1'   |
 'white'

export type TLabelSize =
 "size1"  |
 "size2"  |
 "size3"  |
 "size4"  |
 "size5"  |
 "size6"  |
 "size7"  |
 "size8"  |
 "size9"  |
 "size10" |
 "size11" |
 "size12"

export type TLabelPosition =
 "bottom"              |
 "bottomLeft"          |
 "bottomRight"         |
 "center"              |
 "centerBlock"         |
 "centerHorizontal"    |
 "centerVertical"      |
 "centerVerticalLeft"  |
 "centerVerticalRight" |
 "left"                |
 "none"                |
 "right"               |
 "root"                |
 "top"                 |
 "topLeft"             |
 "topRight"

export type TLabelDirection =
 "all"         |
 "bottom"      |
 "bottomLeft"  |
 "bottomRight" |
 "center"      |
 "horizontal"  |
 "left"        |
 "middle"      |
 "none"        |
 "right"       |
 "top"         |
 "topLeft"     |
 "topRight"    |
 "vertical"

export type TBrand =
 "disabled"  |
 "global"    |
 "inactive"  |
 "info"      |
 "neutral"   |
 "none"      |
 "primary"   |
 "tertiary"  |
 "root"      |
 "secondary" |
 "warning"   |
 "failure"   |
 "loading"

export type TDirectionSpacing =
 "all"        |
 "top"        |
 "bottom"     |
 "right"      |
 "left"       |
 "horizontal" |
 "vertical"   |
 "none"

export type TVariantText =
"headingOne"   |
"headingTwo"   |
"headingThree" |
"titleOne"     |
"titleTwo"     |
"bodyOne"      |
"bodyTwo"      |
"description"  |
"list"         |
"button"       |
"link"         |
"labelOne"     |
"labelTwo"     |
"input"        |
"placeholder"  |
"icon"         |
"option"       |
"invalid"      |
"counter"      |
"figcaption"

export type TColAuto =
 'auto1'  |
 'auto2'  |
 'auto3'  |
 'auto4'  |
 'auto5'  |
 'auto6'  |
 'auto7'  |
 'auto8'  |
 'auto9'  |
 'auto10'

export type TColPercent =
 'percent10'        |
 'percent100'       |
 'percent100Gutter' |
 'percent10Gutter'  |
 'percent15'        |
 'percent15Gutter'  |
 'percent20'        |
 'percent20Gutter'  |
 'percent25'        |
 'percent25Gutter'  |
 'percent30'        |
 'percent30Gutter'  |
 'percent33'        |
 'percent33Gutter'  |
 'percent5'         |
 'percent50'        |
 'percent50Gutter'  |
 'percent5Gutter'   |
 'percent66'        |
 'percent66Gutter'  |
 'percent7'         |
 'percent75'        |
 'percent75Gutter'  |
 'percent80'        |
 'percent80Gutter'  |
 'percent90'        |
 'percent90Gutter'

export type TColFixed =
 "widthsize1"  |
 "widthsize2"  |
 "widthsize3"  |
 "widthsize4"  |
 "widthsize5"  |
 "widthsize6"  |
 "widthsize7"  |
 "widthsize8"  |
 "widthsize9"  |
 "widthsize10" |
 "widthsize11" |
 "widthsize12"

export type TFonts = 'heading' | 'title' | 'text'
export type TState = "failure" | "loading" | "disabled" | "success"
export type TAlignText = "left" | "right" | "center"
export type TAlignVertical = "baseline" | "text-top" | "text-bottom" | "sub" | "super"
export type TDisplaySettings = "inline" | "inline-block" | "block" | "none";
export type TTextStyles = "bold" | "italic";
export type TGridType = "wrapper" | "column";
export type TGridDisplay = "flex" | "grid";
export type TWhiteSpace = "pre" | "preLine";
export type TPositionTypes = "absolute" | "relative" | "fixed" | "sticky" | "static" | "none" | "none";
export type TSizesButton = "small" | "medium" | "large" | "default"
export type TSizesText = "small" | "medium" | "large" | "default"
export type TSizesCol = "auto1" | "auto2" | "auto3" | "auto4" | "auto5" | "auto6" | "auto7" | "auto8" | "auto9" | "auto10" | "percent10" | "percent20" | "percent25" | "percent33" | "percent40" | "percent50" | "percent66" | "percent75" | "percent100" | "none";
export type TUnitOfMeasurement = "em" | "rem" | "px" | "none"