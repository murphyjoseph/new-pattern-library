import React, { FC } from "react";
import { ITextForm, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import { cssButton, cssButtonVariant, cssButtonSize } from "./_css-button";
import { css } from "aphrodite/no-important";

interface ITraits {
  traits: ITextForm
}

export const TextForm: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, variant, size, ...remainder} = traits;

  const classes = [
    cssButton.base,
    cssButton.hover,
    cssButtonVariant[variant],
    cssButtonSize[size],
    !!remainder.styles && remainder.styles
  ]
  const optionalAttributes: any = {
    ...(!!remainder.css && !!remainder.css.styles && { style: remainder.css.styles }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "button"
  }

  return (
    <button type="submit"
            className={css(classes)}
            {...optionalAttributes}>
      <Text traits={traitsForText} />
    </button>
  )
};