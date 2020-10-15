import React, { FC } from "react";
import { IText, ITextCTA } from './Text.interface';
import { Text } from "./Text";
import _isFunction from 'lodash/isFunction';
import { cssButtonKind, cssButtonSize, mixinButton } from "./_cssButton";
import { style } from 'typestyle';

interface ITraits {
  traits: ITextCTA
}

export const TextCTA: FC<ITraits> = ({
  traits
}) => {

  const { text: _text, rel: _rel, target: _target,
          href: _href, variant, size, styleExternal, state, kind } = traits;

  const stylesCore = style(
    mixinButton,
    cssButtonSize[size],
    cssButtonKind(kind, variant),
    !!styleExternal && styleExternal
  )

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
      className={stylesCore}
      {...optionalAttributes}
    >
      <Text traits={traitsForText} />
    </a>
  )
};