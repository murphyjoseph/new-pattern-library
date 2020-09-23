import { TLabelsSpacing, mapLabels } from '../map-labels';
import { mapSizes } from '../map-sizes';
import { TSpacingDirections } from '../../../types/util-types';
import { css } from 'linaria';

interface IStylesSpacingJS {
  direction: TSpacingDirections,
  size: TLabelsSpacing
}

export const linariaPadding = (_direction: TSpacingDirections, _size: any) => {
  return (

    css`padding: 1em`
  )
  // console.log("params")
  // console.log(_params)

  // let padding;

  // if (!_params.size) _params.size = "size1"
  // if (!_params.direction) _params.direction = "all"
  // const direction = _params.direction
  // const thing = mapSizes.spacing
  // const newVal = "1em"
  // console.log("FUCK")
  // console.log(_params)
  // console.log("_______")
  // // console.log(`padding: ${mapSizes.spacing[_params.size]}em`)
  // const size = thing[direction]
  // padding = css`padding: ${newVal}`
  // padding = ""
  // return (
  //   padding
  // )
  // if (!_params) return;
  // const SETTING = _params.size
  // if(!_params) return
  // const val = mapSizes.spacing[SETTING]
  // return (
  //   css`padding: ${val}em`
  // )
  // if (params.direction === mapLabels.directions.spacing.all) {
  //   return (
  //     css`padding: ${mapSizes.spacing[params.size]}em`
  //   )
  // } else if (params.direction === mapLabels.directions.spacing.vertical) {
  //   return (
  //     css`
  //       padding-top: ${mapSizes.spacing[params.size]}em;
  //       padding-bottom: ${mapSizes.spacing[params.size]}em;
  //     `
  //   )
  // }
}

