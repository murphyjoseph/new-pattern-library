import React, { FC } from "react";
import { ITextLink, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";

interface ITraits {
  traits: ITextLink
}

export const TextLink: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, target: _target, href: _href, ...remainder} = traits;

  const optionalAttributes: any = {
    ...(!!_target && { target: _target }),
    ...(!!_rel && { rel: _rel }),
    ...(!!remainder.css && !!remainder.css.styles && { style: remainder.css.styles }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "link"
  }

  return (
    <a href={_href}
       {...optionalAttributes}
       {...stylerAttributeAndClassSetup(remainder)}>
      <Text traits={traitsForText} />
    </a>
  )
};