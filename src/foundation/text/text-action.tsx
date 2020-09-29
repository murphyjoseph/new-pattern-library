import React, { FC } from "react";
import { ITextAction, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import stylesTextBtn from './text-btn.module.scss';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { convertToKabob } from "../../shared/utilities/convertToKabob";
import classNames from "classnames";
import '@compiled/css-in-js';

interface ITraits {
  traits: ITextAction
}

export const TextAction: FC<ITraits> = ({
  traits
}) => {

  const StylesTextBtn = stylesTextBtn as { [key: string]: string }

  console.log(StylesTextBtn)

  const { onClick, size, text: _text, ...remainder} = traits;

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!onClick) return
    if (_isFunction(onClick)) onClick(event);
  };

  const stylesForBtn = classNames(StylesTextBtn[`text-btn-base`],
                                  StylesTextBtn[`is-${size}`],
                                  StylesTextBtn[`text-btn-${convertToKabob(remainder.variant)}`])

  if (!!remainder.css) remainder.css.internal = stylesForBtn
  if (!remainder.css)
    remainder.css = {}
    remainder.css.internal = stylesForBtn

  // React.HTMLProps<HTMLAnchorElement>
  const optionalAttributes: any = {
    ...(!!remainder && !!remainder.css.styles && { style: remainder.css.styles }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    variant: "btn",
    text: _text,
  }

  return (
    <button onClick={handleClick}
            {...optionalAttributes}
            {...stylerAttributeAndClassSetup(remainder)}>
      <Text traits={traitsForText} />
    </button>
  )
};