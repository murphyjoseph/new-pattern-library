import React, { FC } from "react";
import { IText, ITextCTA } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import stylesTextBtn from './text-btn.module.scss';
import classNames from "classnames";
import { size } from "lodash";
import { convertToKabob } from "../../shared/utilities/convertToKabob";

interface ITraits {
  traits: ITextCTA
}

export const TextCTA: FC<ITraits> = ({
  traits
}) => {

  const StylesTextBtn = stylesTextBtn as { [key: string]: string }

  const { text: _text, rel: _rel, target: _target, href: _href, ...remainder} = traits;

  const stylesForBtn = classNames(StylesTextBtn[`text-btn-base`],
                                  StylesTextBtn[`is-${size}`],
                                  StylesTextBtn[`text-btn-${convertToKabob(remainder.variant)}`])

  if (!!remainder.css) remainder.css.internal = stylesForBtn
  if (!remainder.css)
    remainder.css = {}
    remainder.css.internal = stylesForBtn

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