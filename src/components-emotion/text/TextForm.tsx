/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";
import { ITextForm, IText } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButton, cssButtonVariant, cssButtonSize } from "./_cssButton";

interface ITraits {
  traits: ITextForm
}

export const TextForm: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, variant, size, styles } = traits;

  const classes = {
    ...cssButton.base,
    ...cssButton.hover,
    ...cssButtonVariant[variant],
    ...cssButtonSize[size],
    ...!!styles && styles
  }

  const optionalAttributes: any = {
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "button"
  }

  return (
    <button type="submit"
            css={classes}
            {...optionalAttributes}>
      <Text traits={traitsForText} />
    </button>
  )
};