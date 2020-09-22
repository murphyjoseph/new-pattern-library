import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IPortal } from '../portal/portal.interface';
import { TSizeLabels, TColors } from '../../shared/types/util-types';
import { IPane } from '../pane/pane.interface';
import { IStylesSpacing } from '../../shared/interfaces/styles.interface';

export interface IModal extends IPattern {
  onClose: () => void
  onOpen: () => void
  // need to be able to force close based on embedded button
  forceClose: () => void
  location: "top" | "bottom" | "right" | "left",
  isPortal: boolean,
  size: TSizeLabels,
  traitPortal?: IPortal,
  traitPane: IPane
  traitTrigger: {
    // this is automatic and not dependent on anything user gives
    // attached to onclick is the onOpen and onClose
    // onClick: () => void
    backgroundColor: TColors
    margin: IStylesSpacing
    padding: IStylesSpacing
    slot: JSX.Element | React.ReactNode
  }
}