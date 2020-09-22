import React, { FC } from "react"
import { IBar } from "./Bar.interface";
import { stylerAttributeAndClassSetup } from '../../../shared/services/styler';
import { IconAction } from '../../../foundation/icon/icon-action';
import { Positioner } from '../../../foundation/positioner/positioner';
import { TextLink } from '../../../foundation/text/text-link';
import { TextAction } from '../../../foundation/text/text-action';
import mainStyles from '../../../shared/styles/styles.module.scss';

interface ITraits {
  traits: IBar
}

export const Bar: FC<ITraits> = ({ traits }) => {

  const MainStyles = mainStyles as { [key: string]: string }

  if (!!traits.css) {
    traits.css.internal = MainStyles['ut-position-relative']
  } else {
    traits.css = {}
    traits.css.internal = MainStyles['ut-position-relative']
  }

  const { slot, iconActionBindings, textLinkBindings, textActionBindings, ...remainder } = traits;

  return (

    <div {...stylerAttributeAndClassSetup(remainder)}>

      {
        !!textActionBindings || !!textLinkBindings &&
        <Positioner traits={({ direction: "left", type: "absolute" })}>

          {/* second option here could be to actually just make this a slot as well? */}

          {
            !!textActionBindings &&
            <TextAction traits={textActionBindings} />
          }
          {
            !!textLinkBindings &&
            <TextLink traits={textLinkBindings} />
          }

        </Positioner>
      }


      {slot}


      {

        !!iconActionBindings &&
        <Positioner traits={({ direction: "right", type: "absolute" })}>

          {/* second option here could be to actually just make this a slot as well? */}

          <IconAction traits={iconActionBindings} />

        </Positioner>
      }

    </div>
  )
}