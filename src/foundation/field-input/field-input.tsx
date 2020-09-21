import React, { FC } from "react";

import { IFieldInput } from './field-input.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { Label } from '../label/label';

interface ITraits {
  traits: IFieldInput;
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { kind, traitLabel, isRequired, for: _for, ...remainder } = traits;

  return (
    <div {...stylerAttributeAndClassSetup(remainder)}>
      <Label traits={({
        main: traitLabel?.main,
        secondary: traitLabel?.secondary,
        isRequired: isRequired,
        for: _for
      })} />

      <input id={_for} type={kind} />
    </div>
  )
}