import React, { FC } from 'react';
import { IText, ITextLink } from '../../components-typestyle/text/Text.interface';
import { TextLink } from '../../components-typestyle/text/TextLink';

interface IPropsLinkPrimary {
  text: string,
  href: string
}

export const LinkPrimary: FC<IPropsLinkPrimary> = ({ text: _text, href: _href }) => {

  const settings: ITextLink = {
    text: _text,
    href: _href,
    variant: "primary",
    target: "_blank"
  }

  return (
    <TextLink traits={settings} />
  )

}