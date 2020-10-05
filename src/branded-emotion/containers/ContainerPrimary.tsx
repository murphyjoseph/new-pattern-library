import React, { FC } from 'react';
import { Container } from '../../components-emotion/container/Container';
import { IContainer } from '../../components-emotion/container/Container.interface';

interface IPropsTextTitlePrimary {
  children: any;
  paddingSize: any;
}

export const ContainerPrimary: FC<IPropsTextTitlePrimary> = ({ children, paddingSize }) => {

  const settings: IContainer = {
    padding: {
      direction: "all",
      size: paddingSize || "size5"
    },
    colorBackground: "primary"
  }

  return (
    <Container traits={settings}>
      { children}
    </Container>
  )

}