import React from 'react';
import styles from './metadata.css';
import {getIntervalString} from "../../../../../utils/js/getIntervalString";

interface IMetaDataProps {
  icon?: string;
  author?: string;
  created_utc?: string;
}

export function MetaData( { icon, author, created_utc, }: IMetaDataProps ) {
  const timeIntervalWithPosting = getIntervalString(created_utc);

  return (
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
          {timeIntervalWithPosting}
          </span>
      </div>

  );
}
