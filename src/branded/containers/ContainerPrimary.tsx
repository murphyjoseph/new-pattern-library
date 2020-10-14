import React, { FC } from 'react';
import { Container } from '../../components/container/Container';
import { IContainer } from '../../components/container/Container.interface';
import { MixinPadding } from '../../styles/mixinPadding';
import { TColor } from '../../types/util-types';

interface IPropsTextTitlePrimary {
  children: any,
  background: TColor
}

export const ContainerPrimary: FC<IPropsTextTitlePrimary> = ({
  children,
  background
}) => {

  // console.log("PADDDING");
  // console.log({padding: MixinPadding(
  //   [
  //     {direction: "right", size: "size12"},
  //     {direction: "all", size: "size5", breakpointName: "breakpoint2", breakpointDirection: "over"}
  //   ]
  // )})

  const settings: IContainer | any = {
    margin: {
      direction: "all",
      size: "size1"
    },

    padding:
      MixinPadding(
        [
          {direction: "right", size: "size12"},
          {direction: "all", size: "size5", breakpointName: "breakpoint2", breakpointDirection: "over"}
        ]
      ),
    colorBackground: background
  }

  console.log("SETTINGS");
  console.log(settings)

  return (
    <Container traits={settings}>
      { children }
    </Container>
  )

}