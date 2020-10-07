import React, { FC } from "react";
import { IText, ITextCTA } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import './_css-button.css';

interface ITraits {
  traits: ITextCTA
}

export const TextCTA: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, target: _target, href: _href, variant, size, styles } = traits;

  const classes = clsx(
    `button_base`,
    `button_${variant}`,
    `button_${size}`,
    !!styles && styles
  )

  const optionalAttributes: any = {
    ...(!!_target && { target: _target }),
    ...(!!_rel && { rel: _rel }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "link"
  }

  return (
    <a href={_href}
       className={classes}
       {...optionalAttributes}>
      <Text traits={traitsForText} />
    </a>
  )
};