/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from 'aphrodite';
import { buttonThemeAphrodite } from './Button.styles';

interface ITraits {
  traits: any;
}

export const ButtonA = ({ traits }: any) => {
  const { label, size, variant, } = traits;
  const classes: any = buttonThemeAphrodite;
  return <button className={css(classes.buttonBase, classes[variant], classes[size])}>{label}</button>
}