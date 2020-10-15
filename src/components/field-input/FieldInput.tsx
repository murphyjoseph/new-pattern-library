import React, { FC } from "react";

import { IFieldInput } from './FieldInput.interface';
import { Label } from '../label/Label';
import { cssTextVariant } from "../text/_cssText";
import { cssFieldInput } from "./_cssFieldInput";
import _isFunction from 'lodash/isFunction';
import { style } from 'typestyle';
import { ILabel } from '../label/Label.interface';

interface ITraits {
  traits: IFieldInput
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { kind, traitLabel: _traitLabel, isRequired, for: _for,
          styleExternal, onChange: _onChange } = traits;

  const styleCoreForDiv = style(
    cssFieldInput.base,
    !!styleExternal && styleExternal
  )

  const StyleCoreForInput = style(
    cssFieldInput.input,
    cssTextVariant.placeholder
  )

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
    <div className={styleCoreForDiv}>
      <Label traits={traitLabel} />

      <input
        className={StyleCoreForInput}
        id={_for}
        type={kind}
        {...optionalAttributes}
      />
    </div>
  )
}