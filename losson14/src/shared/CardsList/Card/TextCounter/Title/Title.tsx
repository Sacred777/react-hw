import React, {useState} from 'react';
import styles from './title.css';
import {Portal} from "../../../../Portal";
import {Post} from "../../../../Post";
import {usePostDetailedData} from "../../../../../hooks/usePostDetailedData";

interface ITitleProps {
  title?: string;
  permalink?: string;
}

export function Title( { title, permalink }: ITitleProps  ) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  // function handlerModalOpened() {
    // console.log(permalink);
    // @ts-ignore
    // const ppp = usePostDetailedData(permalink.replace(/\/$/, '.json'));
    // console.log(ppp);
    // const [ postDetailedData ] = permalink ? usePostDetailedData(permalink.replace(/\/$/, '.json')) : [];
    // setIsModalOpened(!isModalOpened);
    // console.log(postDetailedData)
  // }

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(!isModalOpened); }}>
        {title}
      </a>

      {isModalOpened && (
        <Portal>
          <Post
            permalink={permalink}
            onClose={() => {setIsModalOpened(false); }}
          />
        </Portal>
      )}
    </h2>
  );
}
