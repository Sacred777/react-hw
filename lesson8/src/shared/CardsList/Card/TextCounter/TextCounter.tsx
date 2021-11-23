import React from 'react';
import styles from './textcounter.css';

interface ITextCounterProps {
  author: string;
  avatar: string;
  title: string;
}

export function TextCounter({ author, avatar, title }: ITextCounterProps) {
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img
              className={styles.avatar}
              src="https://cdn.dribbble.com/users/4879670/screenshots/16492456/media/f2c37acfcba61eccb231e00f3bf4b3f1.jpg?compress=1&resize=400x300"
              alt="avatar"
            />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано&nbsp;</span>
            4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            {/*Следует отметить, что новая модель организационной деятельности поможет*/}
            {title}
          </a>
        </h2>
      </div>
  );
}
