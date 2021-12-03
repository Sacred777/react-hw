import React, {useState} from 'react';
import styles from './textcounter.css';
import { getIntervalString } from '../../../../utils/js/getIntervalString';
import {Title} from "./Title";

interface ITextCounterProps {
  author?: string;
  created_utc?: string;
  title?: string;
  icon?: string;
  permalink?: string;
}

export function TextCounter({ author, created_utc, title, icon, permalink }: ITextCounterProps) {
  // const [isModalOpened, setIsModalOpened] = useState(false);
  const timeIntervalWithPosting = getIntervalString(created_utc);

  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
              className={styles.avatar}
              src={icon}
              alt="avatar"
            />
            <a href="#user-url" className={styles.username}>{author}</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано&nbsp;</span>
            {timeIntervalWithPosting}</span>
        </div>

        < Title title={title} permalink={permalink}/>
        {/*<h2 className={styles.title}>*/}
        {/*  <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(!isModalOpened)}}>*/}
        {/*    {title}*/}
        {/*  </a>*/}

        {/*  {isModalOpened && (*/}
        {/*    <Portal>*/}
        {/*      <Post*/}
        {/*          permalink={permalink}*/}
        {/*          onClose={() => {setIsModalOpened(false); }}*/}
        {/*      />*/}
        {/*    </Portal>*/}
        {/*  )}*/}

        {/*</h2>*/}
      </div>
  );
}
