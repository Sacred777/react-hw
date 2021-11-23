import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextCounter } from './TextCounter';

export function Card({ itemData: {} }) {

  console.log(itemData)

  return (
    <li className={styles.card}>
      <TextCounter author={itemData.data.author} avatar={itemData.data.icon_img} title={itemData.data.title} />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
