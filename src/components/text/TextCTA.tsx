import React, { FC } from "react";
import { IText, ITextCTA } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButton, cssButtonVariant, cssButtonSize } from "./_cssButton";
import { style, classes as combineClasses } from 'typestyle';

interface ITraits {
  traits: ITextCTA
}

export const TextCTA: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, target: _target,
          href: _href, variant, size, stylesExternal } = traits;

  const stylesCore = style({
    ...cssButton.base,
    ...cssButton.hover,
    ...cssButtonVariant[variant],
    ...cssButtonSize[size],
    ...!!stylesExternal && stylesExternal
  })

  const optionalAttributes: any = {
    ...(!!_target   && { target: _target }),
    ...(!!_rel      && { rel: _rel }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "link"
  }

  return (
    <a
      href={_href}
      className={combineClasses(stylesCore, 'kitter_textCTA', 'kitter_button')}
      {...optionalAttributes}
    >
      <Text traits={traitsForText} />
    </a>
  )
};