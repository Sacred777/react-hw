import React from 'react';
import styles from './commentform.css';
import {CommentActions} from "../CommentActions";

export function CommentForm() {
  return (
    <form action='#' name='comment'>
      <div className={styles.fieldWrapper}>
        <div className={styles.commentField}>
          <span className={styles.name}>Константин</span>
          <span>, оставьте ваш комментарий</span>
        </div>
      </div>
      <div className={styles.commentFooter}>
        <CommentActions size={18}/>
        <button className={styles.commentButton}>Комментировать</button>
      </div>
    </form>
  );
}
