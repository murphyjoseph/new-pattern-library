import React, {FC, useLayoutEffect } from 'react';

import { createPortal } from 'react-dom';
import { IPortal } from './portal.interface';

interface Traits {
  traits: IPortal;
}

// TODO MAKE WORK IN TESTS
const el = document.createElement('div') as HTMLElement
const portalRoot = document.getElementById('portal-root') as HTMLElement;

export const Portal: FC<Traits> = ({ traits, children }) => {

  useLayoutEffect(() => {

    // Prevent scrolling on mount
    const appRoot = document.getElementById('root') as HTMLElement;

    if (traits.isBlurred) appRoot.style.filter = 'blur(5px)';
    appRoot.style.overflow = 'hidden';
    portalRoot.appendChild(el);

    // Re-enable scrolling when component unmounts
    return () => {

      if (traits.isBlurred) appRoot.style.filter = 'blur()';
      appRoot.style.overflow = 'visible';
      portalRoot.removeChild(el);
    };

  }, []); // Empty array ensures effect is only run on mount and unmount

  return createPortal(children, el);
}