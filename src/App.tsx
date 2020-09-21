import React from 'react';
// import logo from './logo.svg';
// import { TextLink } from './foundation/text/text-link';
// import { TextAction } from './foundation/text/text-action';
// import { TextCTA } from './foundation/text/text-cta';
// import { HeadingOne } from './components/typography/heading-one';
// import { BodyOne } from './components/typography/body-one';
// import { BtnPrimary } from './components/btn/btn-primary';
// import { BtnUtility } from './components/btn/btn-utility';
// import { BodyTwo } from './components/typography/body-two';
// import { PageMarketing } from './components/pages/page-marketing';
// import { mapVariants } from './shared/styles-js/config/map-variants';
// import { setSizes } from './shared/styles-js/config/set-sizes';
// import { mapSizes } from './shared/styles-js/config/map-sizes';
// import { padding } from './shared/styles-js/config/utilities/padding';
// import classes from './shared/styles-js/config/utilities/padding';
import { utPaddingAllSize1 } from './shared/styles/styles.scss';
import { utPaddingAllSize2, utPaddingAllSize3 } from './shared/styles/styles.module.scss';
// import classes
import { style, classes } from './stylable.st.css';
import mainStyles from './shared/styles/styles.scss';
import secondaryStyles from './shared/styles/styles.module.scss';
// import testStyles from './test.module.scss';
import {secondary} from './test.module.scss';
import {primary} from './test.scss';
import {padding} from './shared/styles-js/config/utilities/padding'
import jss from 'jss';
import {createUseStyles} from 'react-jss'
import { IStylesSpacing } from './shared/interfaces/styles.interface';
import { margin } from './shared/styles-js/config/utilities/margin';



// If you want to render on the client, insert it into DOM.

function App() {


  const MainStyles = mainStyles as { [key: string]: string }
  const SecondaryStyles = secondaryStyles as { [key: string]: string }
  // const TestStyles = testStyles as { [key: string]: string }

  const myClickEvent = () => {
    console.log("you clicked.")
  }

  // console.log(classes)
  console.log(style)

//   const a = {
//     ...(someCondition && {b: 5})
//  }

  // ...(!!_target && { target: _target }),

  // ...(!!_padding && { padding: {...padding({direction: "", size: ""})} })
  // let paddingSettings = () => {...padding({})}

  // const useStyles: any = (_padding?: IStylesSpacing, _margin?: IStylesSpacing) => {
  //   return {
  //   createUseStyles({
  //     ...(!!_padding && {
  //       padding: {
  //         ...padding({direction: "all", size: "size1"})
  //       }
  //     })
  //   })

  // }

const useStyles = createUseStyles({
  padding: {...padding({direction: "all", size: "size4"})}
})



  const classes = useStyles()

  // const classes = createUseStyles({[
  //   container: {
  //     padding: stylerPadding()
  //   }
  //   rightColumn: {
  //     flex: stylerColumn(type: 'auto', size: 1)
  //   }
  // ]



  return (
    <div className="App">
      <header>

      </header>
      <main>
        <div className={classes.padding}>
        {/* <PageMarketing title="Examples">
          <HeadingOne tag="h1" text="Heading One" />
          <BodyOne text="body one Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BodyTwo text="body two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BtnPrimary text="Fire Event" onClick={myClickEvent} size="medium" />
        </PageMarketing> */}
          <h1>
            Hi1
          </h1>
          <h1 className={utPaddingAllSize2}>
            Hi2
          </h1>
          <h1 className={MainStyles.utPaddingAllSize3}>
            Hi3
          </h1>
          <h1 className={SecondaryStyles.utPaddingAllSize4}>
            Hi4
          </h1>
          {/* <h1 className={TestStyles.primary}>
            Hi5
          </h1> */}
          <h1 className={secondary}>
            Hi5
          </h1>
          <h1 className={primary}>
            Hi6
          </h1>
          <h1 className={SecondaryStyles["ut-padding-all-size3"]}>
            Hi7
          </h1>
        </div>


      </main>
    </div>
  );
}

export default App;
