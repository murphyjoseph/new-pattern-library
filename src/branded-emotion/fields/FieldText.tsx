import React, { FC } from 'react';
import { IFieldInput } from '../../components-emotion/field-input/FieldInput.interface';
import { FieldInput } from '../../components-emotion/field-input/FieldInput';

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