/* @jsx jsx */  import { jsx } from '@emotion/core'
import React, { FC } from "react";

import { IFieldInput } from './FieldInput.interface';
import { Label } from '../label/Label';
import { cssTextVariant } from "../text/_cssText";
import { cssFieldInput } from "./_cssFieldInput";

interface ITraits {
  traits: IFieldInput;
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { kind, traitLabel, isRequired, for: _for, styles } = traits;

  const classesForDiv = {
    ...cssFieldInput.base,
    ...!!styles && styles
  }

  const classesForInput = {
    ...cssFieldInput.input,
    ...cssTextVariant.placeholder
  }

  return (
    <div css={classesForDiv}>
      <Label traits={({
        main: traitLabel?.main,
        secondary: traitLabel?.secondary,
        isRequired: isRequired,
        for: _for
      })} />

      <input css={classesForInput}
             id={_for}
             type={kind} />
    </div>
  )
}