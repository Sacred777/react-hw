import React from 'react';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <Actions />
    </div>
  );
}
