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
  permalink?: string;
  id?: string;
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
    permalink,
    id,
}: IItemData = itemData;

  let { icon_img }: ISr_detail = sr_detail ? sr_detail: '';
  if (!icon_img) icon_img = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png';
  // console.log(thumbnail);
  if (!thumbnail?.includes('https')) thumbnail = 'https://cdn.dribbble.com/users/3320958/screenshots/16630030/media/11a3ea5ba5ea7b0250cf4bc95cf0d180.jpeg?compress=1&resize=1200x900';

  return (
    <li className={styles.card}>
      <TextCounter author={author} created_utc={created_utc} title={title} icon={icon_img} permalink={permalink} id={id}/>
      <Preview thumbnail={thumbnail}/>
      <Menu />
      <Controls score={score}/>
    </li>
  );
}
