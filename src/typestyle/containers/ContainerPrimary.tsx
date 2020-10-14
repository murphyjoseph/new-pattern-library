import React, { FC } from 'react';
import { Container } from '../../components/container/Container';
import { IContainer } from '../../components/container/Container.interface';
import { TColor } from '../../types/util-types';

interface IPropsTextTitlePrimary {
  children: any,
  background: TColor
}

export const ContainerPrimary: FC<IPropsTextTitlePrimary> = ({
  children,
  background
}) => {

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