import React, { FC } from 'react';
import { TextAction } from '../../components-typestyle/text/TextAction';
import { ITextAction } from '../../components-typestyle/text/Text.interface';
import { TBranding } from '../../types/util-types';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void,
  variant: TBranding
}

export const ButtonDynamic: FC<IPropsTextTitle> = ({
  text: _text,
  onClick: _onClick,
  variant: _variant
}: IPropsTextTitle) => {

  const settings: ITextAction = {
    variant: _variant,
    text: _text,
    onClick: _onClick,
    size: "large"
  };

  return <TextAction traits={settings} />;
};
