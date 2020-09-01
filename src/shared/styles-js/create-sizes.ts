import { stylesConfig } from "./map-config";
import round from 'lodash'

// function roundToTwo(val: any) {
//   return +(Math.round(val + "e+2")  + "e-2");
// }

export const createSizeMap = (multiplier: number, floor?: number, ceiling?: number, sizePrefix?: string, sizeSuffix?: string) => {

  const {
    labels: {
      sizes: LABEL_SIZES
    },
    size: {
      floor: SIZE_FLOOR,
      ceiling: SIZE_CEILING
    }
  } = stylesConfig

  let newSizeArray = [];
  let newSizeValues = {}
  let sizeFloor: any = !!floor ? floor : SIZE_FLOOR
  let sizeCeiling: any = !!ceiling ? ceiling : SIZE_CEILING
  const sizeLabelLength = Object.values(LABEL_SIZES).length

  console.log("TEST")
  console.log(SIZE_CEILING)
  console.log(SIZE_FLOOR)

  sizeFloor = sizeFloor * multiplier;
  sizeCeiling = sizeCeiling * multiplier;
  const sizeIncrement = (sizeCeiling - sizeFloor)/sizeLabelLength;
  let size = 0

  console.log("icrement")
  console.log(sizeIncrement)

  for (let key of Object.keys(LABEL_SIZES)) {
    // console.log(index); // "O", "5", "6"
    // const key = Object.keys(LABEL_SIZES);
    // key = size + sizeIncrement


    size = size === 0 ? sizeFloor : size + sizeIncrement;
    // round(size, 2).toFixed(2)
    //turns out rounding decimals in javascript is a little bit tricky...
    Object.assign(newSizeValues, {[key]: Math.round(size).toFixed(2)})
    // var obj = {key1: "value1", key2: "value2"s};
    // Object.assign(obj, {key3: "value3"});
  }

  console.log(newSizeValues)

  return newSizeValues

}

// @function create-size-map($multiplier, $floor: null, $ceiling: null, $size-prefix: null, $size-suffix: null) {
//   $new-size-map: ();
//   $size-value: 0;
//   $size-labels: map-get($map-config, 'size-labels');
//   $size-labels-length: length($size-labels);
//   $size-ceiling: '';
//   $size-floor: '';

//   // FLOOR
//   @if $floor == null {
//     $size-floor: map-get($map-config, 'size-floor') * $multiplier;
//   } @else {
//     $size-floor: $floor * $multiplier;
//   }

//   // CEILING
//   @if $ceiling == null {
//     $size-ceiling: map-get($map-config, 'size-ceiling') * $multiplier;
//   } @else {
//     $size-ceiling: ($ceiling) * $multiplier;
//   }

//   $size-increment: ($size-ceiling - $size-floor)/$size-labels-length;

//   $i: 0;
//   @each $size-key in $size-labels {

//     // CREATE KEYS
//     @if ($size-prefix != null) {
//       $size-key: "#{$size-prefix}#{$size-key}"
//     }

//     // CREATE VALUES
//     @if ($size-suffix != null) {
//       $size-key: "#{$size-key}#{$size-suffix}"
//     }

//     $new-key-value: ();
//     @if $i < 1 {
//       $size-value: $size-floor;
//     } @else {
//       $size-value: $size-value + $size-increment;
//     }

//     $size-value: decimal-ceil($size-value);

//     $new-size-map: map-set($new-size-map, $size-key, $size-value);
//     $i: $i + 1;
//   }
//   @return $new-size-map;
// }