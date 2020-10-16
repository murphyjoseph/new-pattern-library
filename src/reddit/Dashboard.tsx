import React, { FC, useState } from "react";
import api, { IParams } from '../api/redditAPI';
import { Posts } from "./Posts";
import RawJSONone from '../api/redditPostsRawJSON1.json';
import RawJSONtwo from '../api/redditPostsRawJSON2.json';
import * as csstips from 'csstips';
// TYPESTYLE
import { FieldText } from '../branded/fields/FieldText';
import { ButtonSubmit } from "../branded/buttons/ButtonSubmit";
import { cssDisplay } from '../styles/utility';
import { mixinDisplay } from '../styles/mixinGeneral';
import { style } from 'typestyle'
import { normalize, setupPage, flex } from "csstips";
import { ContainerPrimary } from "../branded/containers/ContainerPrimary";
import { LinkPrimary } from '../branded/links/LinkPrimary';

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

  const flexHorizontalGreen = style(
    csstips.flex,
    csstips.horizontal
  );

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

  // shows overwriting styles :)
  const myStyles = {
    background: "black",
    color: "white"
  }

  // VIEW

  return (
    <SettingProvider value={subreddit}>
      <ContainerPrimary background="neutralLight1">
      <LinkPrimary text="Click here to search more..." href="https://www.google.com" />
      <form
        className={flexHorizontalGreen}
        onSubmit={(event) => fetchPosts({event, subreddit})}
        id="subredditSearch"
      >
        <FieldText
          onChange={(e: React.SyntheticEvent) => handleSubreddit(e)}
          textMain="Enter Subreddit"
          for="subreddit"
          styles={mixinDisplay('inline-block')}
        />
        {/* <ButtonSubmit
          text="submit"
          form="subredditSearch"
        /> */}
        <ButtonSubmit
          text="submit"
          form="subredditSearch"
          styles={myStyles}
        />

      </form>
      {
        !!posts &&
        <Posts posts={posts} />
      }
      </ContainerPrimary>
    </SettingProvider>
  );
}