/** @jsx jsx */
import { jsx } from '@emotion/core'
import { buttonBase, getButtonSize, getButtonTheme } from './Button.styles';
interface ITraits {
  traits: any;
}

export const Button = ({ traits }: any) => {
  const { label, size, variant } = traits;
  console.log(getButtonTheme(variant))
  return <button css={
    [buttonBase,
      getButtonSize(size),
      getButtonTheme(variant)
    ]}>{label}</button>
}