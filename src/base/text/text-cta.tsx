import React, { FC } from "react";
import { IText, ITextCTA } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import { cssButton, cssButtonVariant, cssButtonSize } from "./_css-button";
import { css } from "aphrodite/no-important";

interface ITraits {
  traits: ITextCTA
}

export const TextCTA: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, target: _target, href: _href, variant, size, ...remainder} = traits;

  const classes = [
    cssButton.base,
    cssButton.hover,
    cssButtonVariant[variant],
    cssButtonSize[size],
    !!remainder.styles && remainder.styles
  ]

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
       className={css(classes)}
       {...optionalAttributes}>
      <Text traits={traitsForText} />
    </a>
  )
};