/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from 'aphrodite';
import { buttonThemeAphrodite } from './ButtonA.styles';
import * as ut from '../../helpers';
interface ITraits {
  traits: any;
}

export const ButtonA = ({ traits }: any) => {
  const { label, size, variant, } = traits;
  const classes: any = buttonThemeAphrodite;
  return <button className={
    css(
      classes.buttonBase,
      classes[variant],
      classes[size],
      ut.utAlign.alignVerticalA().ut_align_vertical_bottom
    )
  }
  >
    {label}
  </button>
}