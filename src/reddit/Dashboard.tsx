import React, { FC, useState } from "react";
import api, { IParams } from '../api/redditAPI';
import { Posts } from "./Posts";
import RawJSONone from '../api/redditPostsRawJSON1.json';
import RawJSONtwo from '../api/redditPostsRawJSON2.json';

// APHRODITE
// import { FieldText } from '../branded-aphrodite/fields/FieldText';
// import { ButtonSubmit } from "../branded-aphrodite/buttons/ButtonSubmit";
// import { cssDisplay } from '../styles-aphrodite/display';

// VANILLA CSS
// import '../styles-css/display.css';
// import '../styles-css/alignment.css';
// import '../styles-css/color.css';
// import '../styles-css/margin.css';
// import '../styles-css/padding.css';
// import { FieldText } from '../branded-css/fields/FieldText';
// import { ButtonSubmit } from "../branded-css/buttons/ButtonSubmit";

// EMOTION
// import { FieldText } from '../branded-emotion/fields/FieldText';
// import { ButtonSubmit } from "../branded-emotion/buttons/ButtonSubmit";
// import { cssDisplay } from '../styles-emotion/display';

// JSS
// import { FieldText } from '../branded-jss/fields/FieldText';
// import { ButtonSubmit } from "../branded-jss/buttons/ButtonSubmit";
// import { cssDisplay } from '../styles-jss/display';

// TYPESTYLE
import { FieldText } from '../branded-typestyle/fields/FieldText';
import { ButtonSubmit } from "../branded-typestyle/buttons/ButtonSubmit";
import { cssDisplay } from '../styles-typestyle/utility';
import { styleDisplay } from '../styles-typestyle/display';
import { style } from 'typestyle'
import { normalize, setupPage, flex } from "csstips";
normalize();
setupPage('#root');

function createCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}

export const [useCtx, SettingProvider] = createCtx<string>(); // specify type, but no need to specify value upfront!

export const Dashboard: FC = () => {

  const [subreddit, setSubreddit] = useState("all");
  const [posts, setPosts] = useState({});

  const handleSubreddit = (e: any) =>  {
    setSubreddit(e.target.value)
  }

  const fetchPosts =({event, subreddit: _subreddit, query }: IParams) => {
    console.log("fetch posts...");
    console.log(event);
    event.preventDefault();
    (async () => {
      let _posts: any = {};
      if (_subreddit === "one") {
        console.log("raw JSON one...");
        _posts = RawJSONone
      } else if (_subreddit === "two") {
        console.log("raw JSON two...");
        _posts = RawJSONtwo;
      } else {
        _posts = await api.getPosts({subreddit: _subreddit})
      }

      setPosts(_posts)
    })()
  }

  // const displayInlineBlock = { display: "inline-block" };

  // VIEW

  return (
    <SettingProvider value={subreddit}>
      <main>
        <form
          className={style(flex)}
          onSubmit={(event) => fetchPosts({event, subreddit})}
          id="subredditSearch">
          {/* FOR CSS IN JS */}
          <FieldText
            onChange={(e: React.SyntheticEvent) => handleSubreddit(e)}
            textMain="Enter Subreddit"
            for="subreddit"
            styles={styleDisplay('inline-block')} />
          <ButtonSubmit
            text="submit"
            form="subredditSearch"
            styles={styleDisplay('inline-block')} />

          {/* FOR JUST CSS */}
          {/* <FieldText onChange={(e: React.SyntheticEvent) => handleSubreddit(e)} textMain="Enter Subreddit" for="subreddit" styles='css_display_inlineBlock' />
          <ButtonSubmit text="submit" form="subredditSearch" styles='css_display_inlineBlock' /> */}
        </form>
        {
          !!posts &&
          <Posts posts={posts} />
        }
      </main>
    </SettingProvider>
  );
}