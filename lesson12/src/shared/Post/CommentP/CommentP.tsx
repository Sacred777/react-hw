import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentp.css';
import {Break} from "../../Break";
import {EIcons, Icon} from "../../Icon";
import {EColors, Text} from "../../Text";
import {MenuItemsList} from "../../CardsList/Card/Menu/MenuItemsList";
import {CommentActions} from "../CommentActions";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducer";
import {IUserData} from "../../../store/me/actions";

export function CommentP() {
  const { name } = useSelector<RootState, IUserData>(state => state.me.data);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.selectionStart = ref.current.value?.length as number;
    }
  })

  function handleClick() {
    setIsCommentOpen(!isCommentOpen)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
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
            <Text size={14} color={EColors.orange}>Для пассивного компонента</Text>
            <Break size={8} />
            <Text size={14} color={EColors.grey99}>10 часов назад</Text>
            <Break size={8} />
            <span className={styles.subreddit}>Лига компонетов React</span>
          </div>

          <p className={styles.commentContext}>Нажав на кнопку "Ответить" откроется форма с пассивным компонентом.</p>
          <div className={styles.commentActions}>
            <MenuItemsList firstOnclick={handleClick} postId={'555'} forComment={true} horizontal={true}/>
          </div>

          {isCommentOpen &&
            (<form onSubmit={handleSubmit}>
              <textarea
                className={styles.textarea}
                ref={ref}
                defaultValue={name + ' '}
              />

              <div className={styles.footer}>
                <CommentActions size={18}/>
                <button className={styles.button} type='submit'>Ответить</button>
              </div>
            </form>)
          }
        </div>
      </li>
  );
}
