import React, { FC, useState } from "react";

// TYPESTYLE
import { ContainerPrimary } from '../branded/containers/ContainerPrimary';
import { TextBodyPrimary } from "../branded/typography/TextBodyPrimary";

import { theme } from '../theme';
import { LinkPrimary } from '../branded/links/LinkPrimary';

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
            <ContainerPrimary background={'secondary'}>
              <div className='st-flex'>
                <div className='st-flex__col-auto1'>
                  <img src={post.thumbnail} style={{height: 50, width: 50}} />
                </div>
                <div className='st-flex__col-auto4'>
                  <TextBodyPrimary text={`r/${post.subreddit}`} />
                  { !!post.selfText && <TextBodyPrimary text={`${trimCopy(post.selftext)}`} /> }
                  { !!post.title && <TextBodyPrimary text={`${trimCopy(post.title)}`} /> }
                  { !!post.body && <TextBodyPrimary text={`${trimCopy(post.body)}`} />}

                  <ContainerPrimary background={theme.color.white}>
                    <TextBodyPrimary text={post.score} />

                    {' + '}
                    <TextBodyPrimary text={post.author} />

                    {' + '}
                    <LinkPrimary text="Post Link" href={post.url} />

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