import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextCounter } from './TextCounter';

interface ICardProps {
  itemData: {};
}

interface IItemData {
  author?: string;
  avatar?: string;
  title?: string;
  score?: string;
  thumbnail?: string;
  created_utc?: string;
  sr_detail?: {};
}

interface ISr_detail {
  icon_img?: string;
}

export function Card({ itemData }: ICardProps) {
  let {
    author,
    avatar,
    title,
    score,
    thumbnail,
    created_utc,
    sr_detail,
}: IItemData = itemData;

  const { icon_img }: ISr_detail = sr_detail ? sr_detail: '';

  return (
    <li className={styles.card}>
      <TextCounter author={author} created_utc={created_utc} title={title} icon={icon_img}/>
      <Preview thumbnail={thumbnail}/>
      <Menu />
      <Controls score={score}/>
    </li>
  );
}
