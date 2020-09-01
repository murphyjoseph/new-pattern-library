import React, { FC } from "react"
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { IPage } from "./page.interface";

interface ITraits {
  traits: IPage
}

export const Page: FC<ITraits> = ({ traits, children}) => {

  const { ...remainder } = traits

  return (

    <div {...stylerAttributeAndClassSetup(remainder)}>
      { children }
    </div>
  )
}