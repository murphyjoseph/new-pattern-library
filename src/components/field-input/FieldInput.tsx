import React, { FC } from "react";

import { IFieldInput } from './FieldInput.interface';
import { Label } from '../label/Label';
import { cssTextVariant } from "../text/_cssText";
import { cssFieldInput } from "./_cssFieldInput";
import _isFunction from 'lodash/isFunction';
import { style, classes as combineClasses } from 'typestyle';
import { ILabel } from '../label/Label.interface';

interface ITraits {
  traits: IFieldInput
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { kind, traitLabel: _traitLabel, isRequired, for: _for,
          stylesExternal, onChange: _onChange } = traits;

  const stylesCoreForDiv = style({
    $debugName: "FieldInputDiv",
    ...cssFieldInput.base,
    ...!!stylesExternal && stylesExternal
  })

  const StylesCoreForInput = style({
    $debugName: "FieldInputInput",
    ...cssFieldInput.input,
    ...cssTextVariant.placeholder
  })

  const traitLabel: ILabel = {
    isRequired: isRequired,
    for: _for,
    ..._traitLabel
  }

  const handleChange = (event?: React.SyntheticEvent): void => {
    if (!_onChange) return
    if (_isFunction(_onChange)) {
      if (!!event) event.preventDefault()
      _onChange(event);
    }
  };

  const optionalAttributes: React.HTMLProps<HTMLInputElement> = {
    ...(!!_onChange && { onChange: handleChange })
  };

  return (
    <div className={stylesCoreForDiv}>
      <Label traits={traitLabel} />

      <input
        className={StylesCoreForInput}
        id={_for}
        type={kind}
        {...optionalAttributes}
      />
    </div>
  )
}