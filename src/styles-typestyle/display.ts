import { TDisplaySettings } from '../types/util-types';
// export const cssDisplay = {
//   $debugName: 'display',
//   block: {
//     display: "block"
//   },
//   inlineBlock: {
//     display: "inline-block"
//   },
//   inline: {
//     display: "inline"
//   }
// }

export const styleDisplay = (display: TDisplaySettings) => {
  return { display: display }
}