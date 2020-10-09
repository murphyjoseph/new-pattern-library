import React, { FC } from "react";
import { ITextLink, IText } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssLink, cssLinkVariant } from "./_cssLink";
import { style } from 'typestyle';

interface ITraits {
  traits: ITextLink
}

export const TextLink: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, variant, target: _target, href: _href, id: _id, styles} = traits;

  const classes = style({
    ...cssLink.base,
    ...cssLink.hover,
    ...cssLinkVariant[variant],
    ...!!styles && styles
  })

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
       className={classes}
       {...optionalAttributes}>
      <Text traits={traitsForText} />
    </a>
  )
};