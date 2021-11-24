import React, {useContext} from 'react';
import {Card} from './Card';
import styles from './cardslist.css';
import {postContext} from "../context/postContext";
import { generateRandomString } from '../../utils/js/generateRandomIndex'

export function CardsList() {
  const { postData = [] } = useContext(postContext);

  //TODO вместо индекс - случайную строку из функции
  const postsList = postData.map((post) => {
    const { data } = post;
    const id = generateRandomString();

    return (
      <Card
       key={id}
       itemData={data}
      />
    );
  });

  return (
    <ul className={styles.cardsList}>
      { postsList }
    </ul>
  );
}
