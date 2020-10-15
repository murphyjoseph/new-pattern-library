import React, { FC } from "react";
import { ITextForm, IText } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButtonSize, cssButtonKind, mixinButton } from "./_cssButton";
import { style } from 'typestyle';

interface ITraits {
  traits: ITextForm
}

export const TextForm: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, variant, size, styleExternal, state, kind } = traits;

  const stylesCore = style(
    mixinButton,
    cssButtonSize[size],
    cssButtonKind(kind, variant),
    !!styleExternal && styleExternal
  )

  const optionalAttributes: any = {
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "button"
  }

  return (
    <button
      type="submit"
      className={stylesCore}
      { ...optionalAttributes }
    >
      <Text traits={ traitsForText } />
    </button>
  )
};