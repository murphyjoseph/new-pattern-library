import React, { FC } from 'react';
import { TextAction } from '../../components/text/TextAction';
import { ITextAction } from '../../components/text/Text.interface';
import { TBrand } from '../../types/util-types';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void,
  variant: TBrand
}

export const ButtonDynamic: FC<IPropsTextTitle> = ({
  text: _text,
  onClick: _onClick,
  variant: _variant
}) => {

  const settings: ITextAction = {
    variant: _variant,
    text: _text,
    onClick: _onClick,
    size: "large"
  };

  return <TextAction traits={settings} />;
};
