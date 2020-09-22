import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
import { Pane } from '../pane/pane';
import { IModal } from './modal.interface';

interface Traits {
  traits: IModal;
}

export const Drawer: FC<Traits> = ({ traits }) => {

  const { traitTrigger, traitPane } = traits

  const Body = () => {
    <Pane traits={traitPane} />
  }

  const Trigger = () => {
    <div>
      {traitTrigger.slot}
      {/* is there a way to test if slot is textAction?
      if so we can alert them that they need to set isFaux to true */}
    </div>
  }

  return (
    <></>
  )

}
