import React from 'react';
import { Button } from '../components/Button/Button';

export const PrimaryButton = ({
  label,
  size,
}: any) => {
  const settings: any = {
    variant: 'primary',
    label,
    size,
  };
  return <Button traits={settings} />
}