import React from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.css';
import { generateKey } from '../../../../utils/js/generateRandomIndex';
import { MenuList } from './MenuList';
import { merge } from '../../../../utils/js/merge';
import { MenuIcon } from '../../../Icons';
import { EColors, Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList'

const button = <button className={styles.menuButton}></button>

const LIST = [
  { value: 'Комментарии'},
  { value: 'Поделиться'},
  { value: 'Скрыть', class: 'drop-mob', },
  { value: 'Сохранить' },
  { value: 'Пожаловаться', class: 'drop-mob', },
].map(generateKey);

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={<button className={styles.menuButton}>
          <MenuIcon />
        </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="1234" />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
