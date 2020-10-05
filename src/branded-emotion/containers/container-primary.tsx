import React, { FC } from 'react';
import { Container } from '../../components-emotion/container/container';
import { IContainer } from '../../components-emotion/container/container.interface';

interface IPropsTextTitlePrimary {
  children: any
}

export const ContainerPrimary: FC<IPropsTextTitlePrimary> = ({ children }) => {

  const settings: IContainer = {
    padding: {
      direction: "all",
      size: "size5"
    },
    colorBackground: "primary"
  }

  return (
    <Container traits={settings}>
    { children }
  </Container>
  )

}