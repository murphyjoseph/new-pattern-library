import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../shared/styles-js/config/utilities/getters';

export let StylesText: any = StyleSheet.create({
  btn: {
    display: "block",
    minHeight: getSizeButton("size2"),
    padding: getSizeSpacing("size2"),
    cursor: "pointer",
    background: getColor("primary"),
  },
  hover: {
    ':hover': {
      background: getColor("global"),
      transition: "200ms"
    }
  },
  btnSizeLg: {
    height: getSizeButton("size4")
  },
  btnSizeMd: {
    height: getSizeButton("size3")
  },
  btnSizeSm: {
    height: getSizeButton("size1")
  }
})