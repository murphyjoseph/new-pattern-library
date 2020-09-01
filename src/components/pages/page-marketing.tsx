import React, { FC } from 'react';
import { IPage } from '../../foundation/page/page.interface';
import { Page } from '../../foundation/page/page';

export interface IPropsPageMarketing {
  title: string,
  children: any
}

export const PageMarketing: FC<IPropsPageMarketing>  = ({
  title: _title,
  children
}) => {

    const settings: IPage = {
      title: _title,
      padding: {
        direction: "all",
        size: "size5"
      }
    }

    return <Page traits={settings}> {children} </Page>

}