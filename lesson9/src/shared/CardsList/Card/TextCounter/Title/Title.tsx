import React, {useState} from 'react';
import styles from './title.css';
import {Portal} from "../../../../Portal";
import {Post} from "../../../../Post";

interface ITitleProps {
  title?: string;
  permalink?: string;
}

export function Title( { title, permalink }: ITitleProps  ) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(!isModalOpened)}}>
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
