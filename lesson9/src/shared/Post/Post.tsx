import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import {KarmaCounter} from "../CardsList/Card/Controls/KarmaCounter";
import {usePostDetailedData} from "../../hooks/usePostDetailedData";
import {useHandlerOnEvent} from "../../hooks/useHandlerOnEvent";

interface IPost {
  permalink?: string;
  onClose?: () => void;
}

interface IPostData {
  author?: string;
  title?: string;
  selftext?: string;
}

export function Post( props: IPost) {
  // const ref = useRef<HTMLDivElement>(null);
  //
  // useEffect(() => {
  //   function handleClick(event: MouseEvent) {
  //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {
  //       props.onClose?.();
  //     }
  //   }
  //
  //   document.addEventListener('click', handleClick);
  //
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   }
  // }, []);

  const [ref] = useHandlerOnEvent(props.onClose);

  const [ postDetailedData ] = props.permalink ? usePostDetailedData(props.permalink.replace(/\/$/, '.json')) : [];
  if (!postDetailedData) return null;
  // @ts-ignore
  let { author, title, selftext }: IPostData = postDetailedData;
  console.log('Post.tsx');
  console.log(author);
  console.log(title);
  console.log(selftext);

  return (
      <div className={styles.modalContainer} ref={ref}>
        <KarmaCounter />
        <button>{`Author ${author}`}</button>
      </div>
  );
}
