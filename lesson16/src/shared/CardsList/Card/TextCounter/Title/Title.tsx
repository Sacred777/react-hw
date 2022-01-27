import React from 'react';
import styles from './title.css';
import {Link} from "react-router-dom";

interface ITitleProps {
  title?: string;
  permalink?: string;
  id?: string;
}

export function Title({title, permalink, id}: ITitleProps) {

  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
