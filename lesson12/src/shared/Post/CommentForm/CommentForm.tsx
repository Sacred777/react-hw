import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {CommentActions} from "../CommentActions";

export function CommentForm() {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);

    setValueError(validateValue());

    const isFormValid = !validateValue();
    if (!isFormValid) return;
    console.log(value);
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3-х символов';
    return '';
  }

  return (
    <form name='comment' onSubmit={handleSubmit}>
      <div className={styles.fieldWrapper}>
        <textarea
            className={styles.commentField}
            value={value}
            onChange={handleChange}
            aria-invalid={valueError ? 'true' : undefined}
        >
        </textarea>
        {/*{errors?.commentText && <div>{errors?.commentText?.message || 'Ошибка валидации'}</div>}*/}
        {touched && valueError && (<div>{valueError}</div>)}
      </div>
      <div className={styles.commentFooter}>
        <CommentActions size={18}/>
        <button type="submit" className={styles.commentButton}>Комментировать</button>
      </div>
    </form>
  );
}
