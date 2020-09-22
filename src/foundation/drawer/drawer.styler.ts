import drawerStyles from './drawer.module.scss';
import mainStyles from '../../styles/styles.module.scss';
import classNames from 'classnames';
import { capitalizeFirst } from '../../shared/utilities/capitalizeFirst';

const MainStyles = mainStyles as { [key: string]: string }
const DrawerStyles = drawerStyles as { [key: string]: string }

interface Props {
  isPortal: boolean,
  location: string,
  size: string
}

export const drawerBodyStyler = ({isPortal, location: _location, size: _size}: Props) => {
  const position = !!isPortal ? MainStyles['ut-position-fixed'] : MainStyles['ut-position-absolute']
  const isDrawer = !!isPortal ? DrawerStyles['drawer-portal'] : DrawerStyles['drawer-no-portal']
  const location = DrawerStyles[`drawer-direction-${_location}`];
  const mysize = capitalizeFirst(_size)
  const size = DrawerStyles[`drawer-${_size}`];
  console.log("sizing information man")
  console.log(size)
  // console.log(DrawerStyles[`drawer`])
  const overflow = MainStyles['ut-overflow-y-auto']

  return classNames(position, isDrawer, location, size, overflow)

}