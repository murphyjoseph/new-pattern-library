import React, { FC } from "react"
import { IPositioner } from "./positioner.interface";
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";

interface ITraits {
  traits: IPositioner
}

// This is a pattern to help with positioning elements on the page.

export const Positioner: FC<ITraits> = ({ traits, children }) => {

  return (
    <div {...stylerAttributeAndClassSetup(traits)}>
      { children }
    </div>
  )

}