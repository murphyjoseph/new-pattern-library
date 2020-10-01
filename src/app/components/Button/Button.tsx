/** @jsx jsx */
import { jsx } from '@emotion/core'
import { buttonBase, getButtonSize, getButtonTheme } from './Button.styles';
import * as ut from '../../helpers';
interface ITraits {
  traits: any;
}

export const Button = ({ traits }: any) => {
  const { label, size, variant } = traits;

  return <button style={{ padding: 0 }} css={[buttonBase,
    getButtonSize(size),
    getButtonTheme(variant),
    ut.utAlign.alignVertical('top'),
  ]}>{label}</button>
}