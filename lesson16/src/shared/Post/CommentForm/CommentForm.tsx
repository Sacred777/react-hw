import React, {ChangeEvent} from 'react';
import styles from './commentform.css';
import {CommentActions} from "../CommentActions";
import {useForm} from "react-hook-form";
import { useStoreon} from "storeon/react";

type TFormValues = {
  textArea: string;
}

export function CommentForm() {
  const { dispatch, comments } = useStoreon('comments');
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<TFormValues>(
    {
      reValidateMode: 'onSubmit',
    }
  );

  const onSubmit = (data: TFormValues) => console.log(data.textArea);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch('changeComment', event.target.value);
  }

  return (
    <form name='comment' onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fieldWrapper}>
        <textarea
          className={styles.commentField}
          // value={myComment.value}
          value={comments}
          {...register('textArea', {
            required: 'Введите больше 3-х символов',
            minLength: {
              value: 4,
              message: 'Введите больше 3-х символов',
            },
            onChange: (event) => handleChange(event),
          })}
        >
        </textarea>
        {errors?.textArea && <div>{errors?.textArea?.message || 'Ошибка валидации'}</div>}
      </div>
      <div className={styles.commentFooter}>
        <CommentActions size={18}/>
        <button type="submit" className={styles.commentButton}>Комментировать</button>
      </div>
    </form>
  );
}
