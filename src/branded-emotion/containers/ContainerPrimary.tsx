import React, { FC } from 'react';
import { Container } from '../../components-emotion/container/Container';
import { IContainer } from '../../components-emotion/container/Container.interface';
import { TColors } from '../../types/util-types';

interface IPropsTextTitlePrimary {
  children: any,
  background?: TColors,
  paddingSize?: any;
}

export const ContainerPrimary: FC<IPropsTextTitlePrimary> = ({ children, paddingSize, background }) => {

  const settings: IContainer = {
    padding: {
      direction: "all",
      size: paddingSize || "size5"
    },
    colorBackground: background
  }

  return (
    <Container traits={settings}>
      { children}
    </Container>
  )

}