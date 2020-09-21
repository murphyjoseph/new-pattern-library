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
import classes, { padding } from './shared/styles-js/config/utilities/padding';

// import classes

function App() {
  const myClickEvent = () => {
    console.log('you clicked.');
  };

  console.log(mapSizes);

  console.log(mapVariants);

  console.log('classes');
  console.log(classes);

  return (
    <div className="App">
      <header />
      <main>
        <PageMarketing title="Examples">
          <HeadingOne tag="h1" text="Heading One" />
          {/* <div className={padding({size: "size12", direction: "all"})} /> */}
          <BodyOne text="body one Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BodyTwo text="body two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BtnPrimary text="Fire Event" onClick={myClickEvent} size="medium" />
        </PageMarketing>

      </main>
    </div>
  );
}

export default App;
