import React, { FC } from "react";
import { ITextAction, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import stylesTextBtn from './text-btn.module.scss';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { convertToKabob } from "../../shared/utilities/convertToKabob";
import classNames from "classnames";
import { StylesText } from './text-styles';
import { StyleSheet, css } from 'aphrodite/no-important';

interface ITraits {
  traits: ITextAction
}

export const TextAction: FC<ITraits> = ({
  traits
}) => {

  const { onClick, size, text: _text, ...remainder} = traits;

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!onClick) return
    if (_isFunction(onClick)) onClick(event);
  };

  const classes = [
    StylesText.btn,
    StylesText.hover,
    StylesText[size],
    !!remainder.css && !!remainder.css.internal && remainder.css.internal,
    !!remainder.css && !!remainder.css.container && remainder.css.container
  ]

  const optionalAttributes: any = {
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    variant: "btn",
    text: _text,
  }

  return (
    <button onClick={handleClick}
            className={css(classes)}
            {...optionalAttributes}>
      <Text traits={traitsForText} />
    </button>
  )
};