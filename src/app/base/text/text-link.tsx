import React, { FC } from "react";
import { ITextLink, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import { cssLink, cssLinkVariant } from "./_css-link";
import { css } from "aphrodite/no-important";

interface ITraits {
  traits: ITextLink
}

export const TextLink: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, variant, target: _target, href: _href, id: _id, styles} = traits;

  const classes = [
    cssLink.base,
    cssLink.hover,
    cssLinkVariant[variant],
    !!styles && styles
  ]

  const optionalAttributes: any = {
    ...(!!_target && { target: _target }),
    ...(!!_rel && { rel: _rel }),
    ...(!!_id && { id: _id })
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