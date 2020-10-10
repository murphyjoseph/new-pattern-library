import React, { FC } from "react";
import { ITextAction, IText } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButton, cssButtonVariant, cssButtonSize } from './_cssButton';
import { style, classes as combineClasses } from 'typestyle';

interface ITraits {
  traits: ITextAction
}

export const TextAction: FC<ITraits> = ({
  traits
}) => {

  const { onClick, size, text: _text, variant, id: _id, stylesExternal } = traits;

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!onClick) return
    if (_isFunction(onClick)) onClick(event);
  };

  const stylesCore = style({
    ...cssButton.base,
    ...cssButton.hover,
    ...cssButtonVariant[variant],
    ...cssButtonSize[size],
    ...!!stylesExternal && stylesExternal
  })

  const optionalAttributes: any = {
    ...(!!_id && { id: _id })
  };

  const traitsForText: IText = {
    variant: "button",
    text: _text,
  }

  return (
    <button onClick={handleClick}
            className={combineClasses(stylesCore, 'kitter_textAction', 'kitter_button')}
            {...optionalAttributes}>
      <Text traits={traitsForText} />
    </button>
  )
};