import { TMapLabels, TLabelsSpacing, mapLabels } from '../map-labels';
import { IStylesSpacing } from '../../../interfaces/styles.interface';
import jss from 'jss'
import { mapSizes } from '../map-sizes';
import { TSpacingDirections } from '../../../types/util-types';

export const test = "";

interface IStylesSpacingJS {
  direction: TSpacingDirections,
  size: TLabelsSpacing
}

export const padding = (params: IStylesSpacingJS) => {
  if (!params.size) params.size = "size1"
  if (params.direction === mapLabels.directions.spacing.all) {
    return {
      padding: `${mapSizes.spacing[params.size]}em`
    }
  } else if (params.direction === mapLabels.directions.spacing.vertical) {
    return {
      paddingTop: `${mapSizes.spacing[params.size]}em`,
      paddingBottom: `${mapSizes.spacing[params.size]}em`
    }
  }
}

// const paddingAllSize12 = padding({size: "size12", direction: "all"})



// const stylesheet: any = jss.createStyleSheet({
//   // for (let key of Object.keys(mapSizes.spacing)) {

//   // }

//   // utPadding: { padding: flex },
//   ...paddingAllSize12
// });

// stylesheet.attach();

// export default stylesheet.classes;