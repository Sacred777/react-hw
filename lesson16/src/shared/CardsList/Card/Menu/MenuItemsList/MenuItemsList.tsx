import React from 'react';
import { EColors, Text } from '../../../../Text';
import styles from './menuitemslist.css';
import { EIcons, Icon } from '../../../../Icon';
import classNames from 'classnames';
import {TSizes} from "../../../../Text";

interface IMenuItemsListProps {
  postId: string;
  isDivider?: boolean;
  horizontal?: boolean;
  textSize?: TSizes;
  forComment?: boolean;
  firstOnclick?: () => void;
}

export function MenuItemsList(
    { postId,
      isDivider = true,
      horizontal = false,
      textSize = 12,
      forComment = false,
      firstOnclick}: IMenuItemsListProps)
    {

  const firstAction = forComment ? 'Ответить' : 'Комментарии';

  return (
    <ul className={ classNames(styles.menuItemsList, { [styles.menuItemsListHorizontal]: horizontal }) }>
      <li className={styles.menuItem} onClick={firstOnclick}>
        <Icon name={EIcons.comment} size={16} />
        <Text size={textSize} color={EColors.grey99}>{firstAction}</Text>
      </li>

      {isDivider && <div className={styles.divider}></div>}

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.share} size={16} />
        <Text size={textSize} color={EColors.grey99}>Поделиться</Text>
      </li>

      {isDivider && <div className={styles.divider}></div>}

      {!forComment && <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.block} size={16} />
        <Text size={textSize} color={EColors.grey99}>Скрыть</Text>
      </li>}

      {isDivider && <div className={styles.divider}></div>}

      {!forComment && <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.save} size={16} />
        <Text size={textSize} color={EColors.grey99}>Сохранить</Text>
      </li>}

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.warning} size={16} />
        <Text size={textSize} color={EColors.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
