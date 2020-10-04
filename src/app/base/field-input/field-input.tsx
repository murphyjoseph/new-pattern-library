import React, { FC } from "react";

import { IFieldInput } from './field-input.interface';
import { Label } from '../label/label';
import { cssTextVariant } from "../text/_css-text";
import { css } from "aphrodite/no-important";
import { cssFieldInput } from "./_css-field-input";

interface ITraits {
  traits: IFieldInput;
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { kind, traitLabel, isRequired, for: _for, styles } = traits;

  const classes = [
    cssFieldInput.base,
    !!styles && styles
  ]

  return (
    <div className={css(classes)}>
      <Label traits={({
        main: traitLabel?.main,
        secondary: traitLabel?.secondary,
        isRequired: isRequired,
        for: _for
      })} />

      <input className={css(cssFieldInput.input, cssTextVariant.placeholder)}
             id={_for}
             type={kind} />
    </div>
  )
}