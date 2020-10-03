import React, { FC } from "react";
import { ITextForm, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import stylesTextAction from './text-btn.module.scss';

interface ITraits {
  traits: ITextForm
}

export const TextForm: FC<ITraits> = ({
  traits
}) => {

  const StylesTextAction = stylesTextAction as { [key: string]: string }

  const { text: _text, ...remainder} = traits;

  if (!!remainder.css) remainder.css.internal = `${StylesTextAction[`text-action`]}, ${StylesTextAction[`text-action-${remainder.variant}`]}`
  if (!remainder.css)
    remainder.css = {}
    remainder.css.internal = `${StylesTextAction[`text-action`]}, ${StylesTextAction[`text-action-${remainder.variant}`]}`

  const optionalAttributes: any = {
    ...(!!remainder.css && !!remainder.css.styles && { style: remainder.css.styles }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    text: _text,
    variant: "button"
  }

  return (
    <button type="submit"
            {...optionalAttributes}
            {...stylerAttributeAndClassSetup(remainder)}>
      <Text traits={traitsForText} />
    </button>
  )
};