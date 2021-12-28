import React from 'react';
import styles from './comments.css';
import {EColors, Text} from "../../Text";
import {Break} from "../../Break";
import {Comment} from "../Comment";
import {CommentP} from "../CommentP";

export function Comments() {
  return (
    <div>
      <Text As={'span'} size={14} color={EColors.grey99}>Сортировать по:</Text>
      <Break size={4} inline={true}/>

      <span>Лучшие</span>

      <Break size={12} top={true}/>

      <div className={styles.divider}></div>

      <ul className={styles.lists}>
        <Comment />
        <CommentP />
      </ul>

    </div>
  );
}
