import React, { FC } from "react";

import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { FieldInput } from '../field-input/field-input';
import { IFieldGroupInput } from "./field-group-radio.interface";
import { IFieldInput } from '../field-input/field-input.interface';

interface ITraits {
  traits: IFieldGroupInput;
}

export const FieldGroupRadio: FC<ITraits> = ({ traits }) => {

  const { traitFieldInput, ...remainder } = traits;

  return (
    <fieldset {...stylerAttributeAndClassSetup(remainder)}>
      <legend>Legend</legend>
      <ul>
        {
          traitFieldInput.map((input: IFieldInput) => (
            <li key={input.id}>
              <FieldInput traits={input} />
            </li>
          ))
        }
      </ul>
    </fieldset>
  )
}