import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg}
      src="https://cdn.dribbble.com/users/3320958/screenshots/16630030/media/11a3ea5ba5ea7b0250cf4bc95cf0d180.jpeg?compress=1&resize=1200x900"
      />
    </div>
  );
}
