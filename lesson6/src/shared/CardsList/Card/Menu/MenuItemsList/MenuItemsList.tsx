import React from 'react';
import { EColors, Text } from '../../../../Text';
import styles from './menuitemslist.css';
import { BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon } from '../../../../Icons';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <CommentIcon />
        <Text size={12} color={EColors.grey99}>Комментарии</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <ShareIcon />
        <Text size={12} color={EColors.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={12} color={EColors.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <SaveIcon />
        <Text size={12} color={EColors.grey99}>Сохранить</Text>
      </li>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <WarningIcon />
        <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
