import React from 'react';
import styles from './menuList.css';

interface IItem {
  value: string;
  id: string;
  onClick: () => void;
  icon?: JSX.Element;
  class?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function MenuList( { list }: IGenericListProps ) {
  return (
    <ul className={styles.menuItemsList}>
      {list.map((item, index) => (
        <li
          onClick={item.onClick}
          className={ item.class ? styles.menuItem : styles.menuItem + ' ' + styles.dropMob }
          key={item.id}>
            <div className={styles.menuContent}>
              {item.icon}
              {item.value}
            </div>
            <div className={styles.divider}></div>
        </li>
        ))}
        <li className={styles.menuClose}>Закрыть</li>
    </ul>
  );
}
