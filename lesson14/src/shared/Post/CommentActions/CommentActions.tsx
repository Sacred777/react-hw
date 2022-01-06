import React from 'react';
import styles from './commentactions.css';
import {EIcons, Icon, TSizes} from "../../Icon";

interface ICommentActionsProps {
  size?: TSizes;
}

export function CommentActions( { size }: ICommentActionsProps) {
  return (
    <ul className={styles.actionsList}>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.code} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.picture} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.document} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.upload} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.people} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.update} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.link} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.audio} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.quote} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.pen} size={size} />
      </li>
      <li className={styles.actionsItems}>
        <Icon name={EIcons.pdf} size={size} />
      </li>
    </ul>
  );
}
