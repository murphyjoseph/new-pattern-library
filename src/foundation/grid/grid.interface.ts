import { IPattern } from '../../shared/interfaces/pattern.interface';
import { TSizeLabels, TColFixed, TColPercent, TColAuto } from '../../shared/types/util-types';


export interface IGridBody extends IPattern {
  kind: "row" | "column",
  isReversed: boolean,
  wrapType: "wrap" | "wrap-reverse" | "nowrap",
  justifyX: "start" | "center" | "end" | "between" | "around"
  alignY: "stretch" | "start" | "center" | "end" | "baseline"
}

export interface IGridItem extends IPattern {
  alignY: "auto" | "stretch" | "start" | "center" | "end" | "baseline",
  isFirst: boolean,
  isLast: boolean,
  order: number,
  column: {
    auto: {
      gutter: TSizeLabels
      size: TColAuto // max is 10? create constants?
      isShrinkable: boolean,
      isGrowable: boolean,
    },
    fixed: {
      gutter: TSizeLabels,
      size: TColFixed
    },
    percent: {
      isGuttered: boolean,
      size: TColPercent
    }
  }
}