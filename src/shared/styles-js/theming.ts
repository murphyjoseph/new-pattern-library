import { mapColors } from './config/map-colors';

export const theme: Record<string, any> = {
  btns: {
    skins: {
      global: {
        main: {
          bg: mapColors['global'],
          border: mapColors['global'],
          text: mapColors['white']
        },
        hover: {
          bg: mapColors['globalLight1'],
          border: mapColors['globalLight1'],
          text: mapColors['white']
        }
      },
      primary: {
        main: {
          bg: mapColors['primary'],
          border: mapColors['primary'],
          text: mapColors['white']
        },
        hover: {
          bg: mapColors['primaryLight1'],
          border: mapColors['primaryLight1'],
          text: mapColors['white']
        }
      },
      primaryOutline: {
        main: {
          bg: mapColors['white'],
          border: mapColors['primary'],
          text: mapColors['primary']
        },
        hover: {
          bg: mapColors['primaryLight1'],
          border: mapColors['primaryLight1'],
          text: mapColors['primaryDark1']
        }
      }
    }
  }
}