import React, { FC } from 'react';
import { IFieldInput } from '../../base-emotion/field-input/field-input.interface';
import { FieldInput } from '../../base-emotion/field-input/field-input';

interface IPropsFieldText {
  textMain: string
  for: string
}

export const FieldText: FC<IPropsFieldText> = ({textMain, for: _for}) => {

  const settings: IFieldInput = {
    for: _for,
    kind: "text",
    traitLabel: {
      for: _for,
      main: {
        text: textMain
      }
    }
  }

  return (
    <FieldInput traits={settings} />
  )
}