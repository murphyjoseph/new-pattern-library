import React, { FC } from "react";
import { ITextAction, IText } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButtonKind, cssButtonSize, mixinButton } from './_cssButton';
import { style, classes as combineClasses } from 'typestyle';

interface ITraits {
  traits: ITextAction
}

export const TextAction: FC<ITraits> = ({
  traits
}) => {

  const { onClick, size, text: _text, variant,
          id: _id, styleExternal, state, kind } = traits;

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!onClick) return
    if (_isFunction(onClick)) onClick(event);
  };

  const stylesCore = style(
    mixinButton,
    cssButtonSize[size],
    cssButtonKind(kind, variant),
    !!styleExternal && styleExternal
  )

  const optionalAttributes: any = {
    ...(!!_id && { id: _id }),
    ...(!!state && state === 'disabled' && { disabled: true })
  };

  const traitsForText: IText = {
    variant: "button",
    text: _text,
  }

  return (
    <button
      onClick={handleClick}
      className={stylesCore}
      {...optionalAttributes}
    >
      <Text traits={traitsForText} />
    </button>
  )
};