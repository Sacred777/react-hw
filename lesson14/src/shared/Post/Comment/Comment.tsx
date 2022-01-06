import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './comment.css';
import {Break} from "../../Break";
import {EIcons, Icon} from "../../Icon";
import {EColors, Text} from "../../Text";
import {MenuItemsList} from "../../CardsList/Card/Menu/MenuItemsList";
import {CommentActions} from "../CommentActions";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducer";
import {IUserData} from "../../../store/me/actions";

export function Comment() {
  const { name } = useSelector<RootState, IUserData>(state => state.me.data);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [value, setValue] = useState(name + ' ');

  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.selectionStart = value?.length as number;
    }
  })

  function handleClick() {
    setIsCommentOpen(!isCommentOpen)
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <li className={styles.commentWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.arrows}>
          <Icon name={EIcons.arrowUp} size={18}/>
          <Break size={8} top={true} inline={true}/>
          <Icon name={EIcons.arrowDown} size={18}/>
        </div>
        <div className={styles.verticalDivider}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.commentHeader}>
          <img className={styles.avatar} src='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png' alt='Аватар' />
          <Text size={14} color={EColors.orange}>Михаил Рогов</Text>
          <Break size={8} />
          <Text size={14} color={EColors.grey99}>1 час назад</Text>
          <Break size={8} />
          <span className={styles.subreddit}>Лига юристов</span>
        </div>
        <p className={styles.commentContext}>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.</p>
        <div className={styles.commentActions}>

          <MenuItemsList firstOnclick={handleClick} postId={'555'} forComment={true} horizontal={true}/>

          {isCommentOpen &&
            (<form onSubmit={handleSubmit}>
              <textarea
                  className={styles.textarea}
                  ref={ref}
                  onChange={handleChange}
                  value={value}
              />

              <div className={styles.footer}>
                <CommentActions size={18}/>
                <button className={styles.button} type='submit'>Ответить</button>
              </div>

            </form>)
          }
        </div>
      </div>

    </li>
  );
}
