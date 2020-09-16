import { setSizes } from "./set-sizes";

interface ISizes {
  general: Object,
  position: Object,
  spacing: Object,
  border: Object,
  button: Object,
  fonts: Object,
  shadow: Object,
  icons: Object,
  logo: Object,
  drawer: Object,
  tracking: Object,
  counter: Object,
  modal: Object,
  gutter: Object,
  field: Object,
  container: Object,
  column: {
    width: Object,
    auto: Object,
  }
}

export const mapSizes: ISizes | any = {
  general      : setSizes({multiplier: 1, unitOfMeasurement: "em"}),
  position     : setSizes({multiplier: 2, unitOfMeasurement: "em"}),
  spacing      : setSizes({multiplier: 1, floor: .2, ceiling: 3, unitOfMeasurement: "em"}),
  border       : setSizes({multiplier: 1, floor: 1, ceiling: 12, unitOfMeasurement: "px"}),
  button       : setSizes({multiplier: 10, unitOfMeasurement: "em"}),
  fonts        : setSizes({multiplier: 1, floor: .6, ceiling: 3, unitOfMeasurement: "em"}),
  shadow       : setSizes({multiplier: .3, unitOfMeasurement: "em"}),
  icons        : setSizes({multiplier: 1, unitOfMeasurement: "em"}),
  logo         : setSizes({multiplier: .75, unitOfMeasurement: "em"}),
  drawer       : setSizes({multiplier: 7, unitOfMeasurement: "em"}),
  tracking     : setSizes({multiplier: 1, unitOfMeasurement: "em"}),
  counter      : setSizes({multiplier: 1, unitOfMeasurement: "em"}),
  modal        : setSizes({multiplier: 1, floor: 10, ceiling: 75, unitOfMeasurement: "em"}),
  gutter       : setSizes({multiplier: 1, unitOfMeasurement: "em"}),
  field        : setSizes({multiplier: 12, unitOfMeasurement: "em"}),
  container    : setSizes({multiplier: 1, floor: 10, ceiling: 100, unitOfMeasurement: "em"}),
  column: {
    width: setSizes({multiplier: 30, unitOfMeasurement: "em"}),
    auto: setSizes({multiplier: 1, floor: 1, ceiling: 12, unitOfMeasurement: "none"})
  }
}