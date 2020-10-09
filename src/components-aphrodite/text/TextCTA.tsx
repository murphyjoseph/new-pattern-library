import React, { FC } from "react";
import { IText, ITextCTA } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButton, cssButtonVariant, cssButtonSize } from "./_cssButton";
import { css } from "aphrodite/no-important";

interface ITraits {
  traits: ITextCTA
}

export const TextCTA: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, target: _target, href: _href, variant, size, styles } = traits;

  const classes = [
    cssButton.base,
    cssButton.hover,
    cssButtonVariant[variant],
    cssButtonSize[size],
    !!styles && styles
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