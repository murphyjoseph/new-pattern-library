import React from 'react';
import { ButtonA } from '../components/Button/ButtonAphrodite';

export const PrimaryOutlineButton = ({
  label,
  size,
}: any) => {
  const settings: any = {
    variant: 'primaryOutline',
    label,
    size,
  };
  return <ButtonA traits={settings} />
}