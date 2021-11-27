import React from 'react';
import styles from './textcounter.css';
import { getIntervalString } from '../../../../utils/js/getIntervalString';

interface ITextCounterProps {
  author?: string;
  created_utc?: string;
  title?: string;
  icon?: string;
}

export function TextCounter({ author, created_utc, title, icon }: ITextCounterProps) {

  // console.log(created_utc);
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
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            {title}
          </a>
        </h2>
      </div>
  );
}
