import React, { FC, useState } from "react";

// APHRODITE
// import { ContainerPrimary } from '../branded-aphrodite/containers/ContainerPrimary';
// import { TextBodyPrimary } from "../branded-aphrodite/typography/TextBodyPrimary";

// CSS
// import { ContainerPrimary } from '../branded-css/containers/ContainerPrimary';
// import { TextBodyPrimary } from "../branded-css/typography/TextBodyPrimary";

// EMOTION
// import { ContainerPrimary } from '../branded-emotion/containers/ContainerPrimary';
// import { TextBodyPrimary } from "../branded-emotion/typography/TextBodyPrimary";

// JSS
// import { ContainerPrimary } from '../branded-jss/containers/ContainerPrimary';
// import { TextBodyPrimary } from "../branded-jss/typography/TextBodyPrimary";

// TYPESTYLE
import { ContainerPrimary } from '../branded-typestyle/containers/ContainerPrimary';
import { TextBodyPrimary } from "../branded-typestyle/typography/TextBodyPrimary";

import { themeCss } from '../themeCss';

interface Posts {
  posts: any;
}

export const Posts: FC<Posts> = ({ posts }) => {

  const trimCopy = (copy: string) => {
    if (!copy) return;
    const length = copy.length
    if (length > 75) {
      return copy.substring(0, 75) + "...";
    }
    return copy
  }

  const setDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  }

  // VIEW

  return (
    <div>
      {
        !!posts && !!posts.data &&
        posts.data.map((post: any, index: number) => {
          console.log(post)
          return (
          <section key={index}>
            <ContainerPrimary background={themeCss.color.white}>
              <div className='st-flex'>
                <div className='st-flex__col-auto1'>
                  <img src={post.thumbnail} style={{height: 50, width: 50}} />
                </div>
                <div className='st-flex__col-auto4'>
                  <TextBodyPrimary text={`r/${post.subreddit}`} />
                  { !!post.selfText && <TextBodyPrimary text={`${trimCopy(post.selftext)}`} /> }
                  { !!post.title && <TextBodyPrimary text={`${trimCopy(post.title)}`} /> }
                  { !!post.body && <TextBodyPrimary text={`${trimCopy(post.body)}`} />}

                  <ContainerPrimary background={themeCss.color.white}>
                    <TextBodyPrimary text={post.score} />

                    {' + '}
                    <TextBodyPrimary text={post.author} />

                    {' + '}
                    <TextBodyPrimary text={post.url} />

                    {' + '}
                    <TextBodyPrimary text={setDate(post.created)} />

                    {' + '}
                    <TextBodyPrimary text={post.num_comments} />

                </ContainerPrimary>
                </div>
                <div>
                  {/* can pass comments with post.subreddit */}
                </div>
              </div>
            </ContainerPrimary>
          </section>
          );
        })
      }
    </div>
  );

}