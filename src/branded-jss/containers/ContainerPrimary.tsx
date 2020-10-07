import React, { FC } from 'react';
import { Container } from '../../components-jss/container/Container';
import { IContainer } from '../../components-jss/container/Container.interface';
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
    colorBackground: background
  }

  return (
    <Container traits={settings}>
      { children }
    </Container>
  )

}