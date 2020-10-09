import React, { FC } from 'react';
import { Container } from '../../components-typestyle/container/Container';
import { IContainer } from '../../components-typestyle/container/Container.interface';
import { TColors } from '../../types/util-types';

interface IPropsTextTitlePrimary {
  children: any,
  background: TColors
}

export const ContainerPrimary: FC<IPropsTextTitlePrimary> = ({ children, background }) => {

  const settings: IContainer = {
    padding: {
      direction: "all",
      size: "size5"
    },
    margin: {
      direction: "top",
      size: "size12"
    },
    colorBackground: background
  }

  return (
    <Container traits={settings}>
    { children }
  </Container>
  )

}