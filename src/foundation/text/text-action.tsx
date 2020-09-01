import React, { FC } from "react";
import { ITextAction, IText } from './text.interface';
import { Text } from "./text";
import _isFunction from 'lodash/isFunction';
import stylesTextAction from './text-action.scss';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { capitalizeFirst } from '../../shared/utilities/capitalizeFirst';


interface ITraits {
  traits: ITextAction
}

export const TextAction: FC<ITraits> = ({
  traits
}) => {

  const StylesTextAction = stylesTextAction as { [key: string]: string }

  const { onClick, text: _text, ...remainder} = traits;

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!onClick) return
    if (_isFunction(onClick)) onClick(event);
  };

  if (!!remainder.css) remainder.css.internal = `${StylesTextAction[`textAction`]}, ${StylesTextAction[`textAction${capitalizeFirst(remainder.variant)}`]}`
  if (!remainder.css)
    remainder.css = {}
    remainder.css.internal = `${StylesTextAction[`textAction`]}, ${StylesTextAction[`textAction${capitalizeFirst(remainder.variant)}`]}`

  console.log(remainder)

  // React.HTMLProps<HTMLAnchorElement>
  const optionalAttributes: any = {
    ...(!!remainder && !!remainder.css.styles && { style: remainder.css.styles }),
    ...(!!traits.id && { id: traits.id })
  };

  const traitsForText: IText = {
    variant: "btn",
    text: _text
  }

  return (
    <button onClick={handleClick}
            {...optionalAttributes}
            {...stylerAttributeAndClassSetup(remainder)}>
      <Text traits={traitsForText} />
    </button>
  )
};