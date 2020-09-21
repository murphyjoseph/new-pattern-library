import { makeStyles } from '@material-ui/styles';
import { stylePadding } from '../helpers/padding-helper';
import { ITheme } from '../theme';

export const useStyles = makeStyles((theme: ITheme) => ({
  root: (props: any) => {
    return {
      ...stylePadding(props.padding),
    }
  },
  headingOne: {
    ...theme.typography.h1,
    [theme.breakpoints.down('breakpoint2')]: {
      fontSize: '10px',
      color: 'purple',
    },
  },
  headingTwo: {

  },
  headingThree: {},
}));
