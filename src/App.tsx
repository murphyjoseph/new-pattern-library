import React from 'react';
import logo from './logo.svg';
import { TextLink } from './foundation/text/text-link';
import { TextAction } from './foundation/text/text-action';
import { TextCTA } from './foundation/text/text-cta';
import { HeadingOne } from './components/typography/heading-one';
import { BodyOne } from './components/typography/body-one';
import { BtnPrimary } from './components/btn/btn-primary';
import { BtnUtility } from './components/btn/btn-utility';
import { BodyTwo } from './components/typography/body-two';
import { PageMarketing } from './components/pages/page-marketing';
import { mapVariants } from './shared/styles-js/config/map-variants';
import { setSizes } from './shared/styles-js/config/set-sizes';
import { mapSizes } from './shared/styles-js/config/map-sizes';
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'
import { stylePadding } from './shared/styles-js/config/utilities/padding';
// import { cx, css } from 'emotion'
import { css, cx } from 'linaria';
import { linariaPadding, utilityPadding } from './shared/styles-js/config/utilities/linaria-padding';
// import classes

function App() {

  const myClickEvent = () => {
    console.log("you clicked.")
  }

  // REACT-JSS

  const useStyles = createUseStyles({
    padding: {...stylePadding({direction: "all", size: "size4"})}
  })

  const classes = useStyles()

  // EMOTION
  // https://emotion.sh/docs/emotion

  // const cls1 = css`
  //   font-size: 20px;
  //   background: green;
  // `
  // const cls2 = css`
  //   font-size: 20px;
  //   background: blue;
  // `
  // const foo = true
  // const bar = false

  // LINARIA

  // import { modularScale, hiDPI } from 'polished';
  // import fonts from './fonts';

  // Write your styles in `css` tag
  const header = css`
    text-transform: uppercase;
    font-size: 14px;
  `;

  const padding = linariaPadding("all", "size5");

  console.log(utilityPadding)


  // const padding = linariaPadding({direction: "all", size: "size5"})


  return (
    <div className="App">
      <header>

      </header>
      <main className={classes.padding}>
        <PageMarketing title="Examples">
          <HeadingOne tag="h1" text="Heading One" />
          {/* <div className={padding({size: "size12", direction: "all"})} /> */}
          <BodyOne text="body one Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BodyTwo text="body two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BtnPrimary text="Fire Event" onClick={myClickEvent} size="medium" />
          {/* <div
            className={cx(
              { [cls1]: foo },
              { [cls2]: bar }
            )}>
              Emotion Example
          </div> */}
          <h1 className={cx(header, padding)}> Linaria </h1>

          <div>

          </div>
        </PageMarketing>

      </main>
    </div>
  );
}

export default App;
