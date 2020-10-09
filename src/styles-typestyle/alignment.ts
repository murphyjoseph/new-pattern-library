import { TAlignmentText } from '../types/util-types';
// export const cssTextAlignment = {
//   center: {
//     textAlign: "center"
//   },
//   right: {
//     textAlign: "right"
//   },
//   left: {
//     textAlign: "left"
//   }
// }

export const styleTextAlignment = (alignment: TAlignmentText) => {
  return { textAlign: alignment }
}