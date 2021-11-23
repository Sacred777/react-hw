import React, {useContext} from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import {postContext} from "../context/postContext";

export function CardsList() {
  const { postData = [] } = useContext(postContext);

  //TODO вместо индекс - случайную строку из функции
  const postsList = postData.map((post, index) => {
    return (
      <Card
       key={index}
       itemData={post}
      />
    );
  });

  return (
    <ul className={styles.cardsList}>
      { postsList }
    </ul>
  );
}
