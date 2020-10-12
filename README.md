## NOTE
- Still figuring out some things here but this is an effort to clean up things for you
- Things still need to be automated to some degree
- Experimenting with styled-components so things might get messy
- Also messy because this was produced strictly for showcasing the direction we're going and lots of cleaning needs to happen

## TODO - Problems
- Why are there multiple style tags all showing the same css?
- We need explicit standards in how to order our imports, when to line break attributes, strictness with semicolons and such (lint roolz), etc.
- Names of components likely need to be refactored with a prefix to prevent issues with html spec
- How should we handle fixed values for dynamic patterns at foundational level?
+ e.g. labels shouldnt have the ability to change kind(variant) value
+ Should we maintain naming structure for those? e.g. if labels have use variant label-one should
  trait be called main or mTraitTextMain and mTraitTextSub (where m stands for modified) that way
  when you see m prefix you know that it's based on IText but has fixed defaults.

CSS in JS
https://2019.stateofcss.com/technologies/css-in-js/

https://typedoc.org/
auto gen typescript docs

https://deno.land/
a secure runtime for JS and TS

If you make SCSS changes you'll need to generate new typings. The command to do that is below.
```
yarn tsm src -n "dashes"
```
Further documentation can be found here: https://github.com/skovy/typed-scss-modules

#############################################

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



QUESTIONS

- How are we going to handle breakpoints in this scenario?

PascalCase for the component names
camel case for the css files
two different theme names one for css variables and one for theme provider
create aphrodite and emotion theme providers

https://aestheticsuite.dev/docs/design-system/config/themes
brand - Organization or company brand color.
primary - Primary color. Typically buttons, links, bars, active states, etc.
secondary - Accent color. Provides emphasis and contrast to the primary color.
tertiary - Additional complementary color for more variation.
neutral - Whites, grays, blacks, etc that make up background, border, shadow, and other layout related pieces.
muted - Disabled and empty like states.
info - State that denotes something as informational.
warning - State that warns the user of something minor.
danger - State that indicates a destructive, atomic, or irreversible action.
failure - State when something errors or fails.
success - State when something succeeds or passes.


https://github.com/typestyle/typestyle/blob/master/src/tests/basic.tsx#L10



https://github.com/typestyle/typestyle/issues/95
interesting idea regarding the css prioritization. i really hate the idea of having to add "important" it just feels so dirty and what happens if you need to override important? its a hack at best and this idea of adding a priority to the styles being added makes a lot of sense.


THings to do
- all styles psaed in from branding are stylesExternal
- if no styles except one exist is stylesCore
- remove interfaces that are only beinge extended and not used anywhere else (IStylesTypography
)
- make consistent the way external styles are handled
- add a base css class to every pattern so you can overwrite styles with nesting
- externalize icons so that they can be imported (i.e. we shouldnt be using same icons we have in here if we make this public)
- create other utility classes
- does it make sense for them to be only mixins or should we also auto generate some utility styling as well? e.g. styleDisplay then cssDisplay which uses style from typestyle
-



- object destructuring how many words before you collapse it?

---------------

the order that things show up in stylesCore
e.g. mixins come after general properties and stylesexternal always last

---------------

const stylesCore = style({
    $debugName: "Container",
    ...!!padding         && mixinPadding(padding),
    ...!!margin          && mixinMargin(margin),
    // A
    ...!!colorBackground && mixinColorBackground(colorBackground),
    // B
    ...!!colorBackground && { background: themeCss.color[colorBackground] },
    ...!!stylesExternal  && stylesExternal
  })

  ---------------

    <Tag
      className={combineClasses(stylesCore, 'kitter_text')}
      {...optionalAttributes}>
      { text }
    </Tag>

    <Tag
      className={combineClasses(stylesCore, 'kitter_text')}
      {...optionalAttributes}
    >
      { text }
    </Tag>

    <Tag className={combineClasses(stylesCore, 'kitter_text')}
         {...optionalAttributes}>
      { text }
    </Tag>
