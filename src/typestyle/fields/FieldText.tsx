import React, { FC } from 'react';
import { IFieldInput } from '../../components/field-input/FieldInput.interface';
import { FieldInput } from '../../components/field-input/FieldInput';
import { theme } from '../../theme';

interface IPropsFieldText {
  textMain: string,
  onChange: React.FormEventHandler<HTMLInputElement>,
  for: string,
  styles?: any
}

export const FieldText: FC<IPropsFieldText> = ({
  textMain,
  for: _for,
  styles: _styles,
  onChange: _onChange
}) => {

  const settings: IFieldInput = {
    for: _for,
    kind: "text",
    styleExternal: _styles,
    onChange: _onChange,
    traitLabel: {
      for: _for,
      main: {
        text: textMain
      },
      secondary: {
        text: "*required"
      },
      isRequired: true,
      styleExternal: {
        paddingRight: theme.size.spacing.size3
      }
    }
  }

  return (
    <FieldInput traits={settings} />
  )
}