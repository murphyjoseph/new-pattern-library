import React, { FC, useState } from "react";
import api, { IParams } from '../api/redditAPI';
import { Posts } from "./Posts";

// APHRODITE
// import { FieldText } from '../branded-aphrodite/fields/FieldText';
// import { ButtonSubmit } from "../branded-aphrodite/buttons/ButtonSubmit";
// import { cssDisplay } from '../styles-aphrodite/display';

// VANILLA CSS
import '../styles-css/display.css';
import '../styles-css/alignment.css';
import '../styles-css/color.css';
import '../styles-css/margin.css';
import '../styles-css/padding.css';
import { FieldText } from '../branded-css/fields/FieldText';
import { ButtonSubmit } from "../branded-css/buttons/ButtonSubmit";

// EMOTION
// import { FieldText } from '../branded-emotion/fields/FieldText';
// import { ButtonSubmit } from "../branded-emotion/buttons/ButtonSubmit";
// import { cssDisplay } from '../styles-emotion/display';

// JSS
// import { FieldText } from '../branded-jss/fields/FieldText';
// import { ButtonSubmit } from "../branded-jss/buttons/ButtonSubmit";
// import { cssDisplay } from '../styles-jss/display';

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
    console.log("set subreddit");
    console.log(subreddit);
    setSubreddit(e.target.value)
    console.log(subreddit);
  }

  const fetchPosts =({event, subreddit: _subreddit, query }: IParams) => {
    event.preventDefault()
    console.log("Current Posts")
    console.log(posts);
    console.log(_subreddit);


    (async () => {
      console.log("awaiting...")
      const _posts = await api.getPosts({subreddit: _subreddit})
      console.log("done awaiting...")
      setPosts(_posts)
    })()
  }

  // VIEW

  return (
    <SettingProvider value={subreddit}>
      <main>
        <form onSubmit={(event) => fetchPosts({event, subreddit})} id="subredditSearch">
          {/* FOR CSS IN JS */}
          {/* <FieldText onChange={(e: React.SyntheticEvent) => handleSubreddit(e)} textMain="Enter Subreddit" for="subreddit" styles={cssDisplay().inlineBlock} />
          <ButtonSubmit text="submit" form="subredditSearch" styles={cssDisplay().inlineBlock} /> */}

          {/* FOR JUST CSS */}
          <FieldText onChange={(e: React.SyntheticEvent) => handleSubreddit(e)} textMain="Enter Subreddit" for="subreddit" styles='css_display_inlineBlock' />
          <ButtonSubmit text="submit" form="subredditSearch" styles='css_display_inlineBlock' />
        </form>
        {
          !!posts &&
          <Posts posts={posts} />
        }
      </main>
    </SettingProvider>
  );
}