/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IFieldInput } from './FieldInput.interface';
import { Label } from '../label/Label';
// import { cssTextVariant } from "../text/_cssText";
import { cssFieldInput } from "./_cssFieldInput";
import _isFunction from 'lodash/isFunction';

interface ITraits {
  traits: IFieldInput
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { kind, traitLabel, isRequired, for: _for, styles, onChange: _onChange } = traits;

  const classesForDiv = {
    ...cssFieldInput.base,
    ...!!styles && styles
  }

  const classesForInput = {
    ...cssFieldInput.input,
    // ...cssTextVariant.placeholder
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
    <div css={classesForDiv}>
      <Label traits={({
        isRequired: isRequired,
        for: _for,
        ...traitLabel
      })} />

      <input css={classesForInput}
             id={_for}
             type={kind}
             {...optionalAttributes} />
    </div>
  )
}