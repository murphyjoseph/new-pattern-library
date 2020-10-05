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