import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextCounter } from './TextCounter';

export function Card() {
  return (
    <li className={styles.card}>
      <TextCounter />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
