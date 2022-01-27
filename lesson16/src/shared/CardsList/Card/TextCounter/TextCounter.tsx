import React from 'react';
import styles from './textcounter.css';
import {Title} from "./Title";
import {MetaData} from "./MetaData";

interface ITextCounterProps {
  author?: string;
  created_utc?: string;
  title?: string;
  icon?: string;
  permalink?: string;
  id?: string;
}

export function TextCounter({ author, created_utc, title, icon, permalink, id }: ITextCounterProps) {

  return (
    <div className={styles.textContent}>
        <MetaData author={author} created_utc={created_utc} icon={icon} />
        < Title title={title} permalink={permalink} id={id}/>
      </div>
  );
}
