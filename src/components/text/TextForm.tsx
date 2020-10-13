import React, { FC } from "react";
import { ITextForm, IText } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButtonVariant, cssButtonSize } from "./_cssButton";
import { style, classes as combineClasses } from 'typestyle';

interface ITraits {
  traits: ITextForm
}

export const TextForm: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, variant, size, stylesExternal } = traits;

  console.log(variant)

  const stylesCore = style({
    $debugName: "TextForm",
    ...cssButtonVariant[variant],
    ...cssButtonSize[size],
    ...!!stylesExternal && stylesExternal
  })

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
      className={combineClasses(stylesCore, 'kitter_textForm', 'kitter_button', 'disabled')}
      { ...optionalAttributes }
    >
      <Text traits={ traitsForText } />
    </button>
  )
};