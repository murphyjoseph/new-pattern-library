import React, { FC } from "react";

import { IFieldInput } from './field-input.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { Label } from '../label/label';

interface ITraits {
  traits: IFieldInput;
}

export const FieldInput: FC<ITraits> = ({ traits }) => {

  const { traitLabel, isRequired, id, ...remainder } = traits

  // more performance to reference object literal
  const forTraitsLabel = {
    main: traitLabel?.main,
    secondary: traitLabel?.secondary,
    isRequired: isRequired,
    for: id
  }

  return (
    <div {...stylerAttributeAndClassSetup(remainder)}>
      <Label traits={forTraitsLabel} />
      <input
        id={traits.id}
        type={traits.kind}
      />
      {/* validation and input description go here */}
    </div>
  )
}