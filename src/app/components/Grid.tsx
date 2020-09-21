import React, { FC } from "react";
import cn from "classnames";
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import gridStyles from '../../shared/styles/styles.module.scss';

interface IGrid {
  children: any;
  container?: boolean;
  item?: boolean;
  // col: number;
  // xs?: string;
  // sm?: string;
  // md?: string;
  // lg?: string;
  // xl?: string;
}

export const Grid: FC<IGrid> = ({ children, container, item, ...remainder }: IGrid) => {
  const GridStyles = gridStyles as Record<string, string>;
  const styles = cn(
    GridStyles['st-flex'],
    GridStyles['st-flex--row'],
    GridStyles['st-flex__col-widthsize2'],
  );
  //@ts-ignore
  if (!!remainder.css) {
    //@ts-ignore
    remainder.css.internal = styles;
  } else {
    //@ts-ignore
    remainder.css = {}
    //@ts-ignore
    remainder.css.internal = styles;
  }

  return (
    <div {...stylerAttributeAndClassSetup(remainder)} >
      { children}
    </div>
  )
}