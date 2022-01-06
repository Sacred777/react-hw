import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './post.css';
import {KarmaCounter} from "../CardsList/Card/Controls/KarmaCounter";
import {usePostDetailedData} from "../../hooks/usePostDetailedData";
import {useHandlerOnEvent} from "../../hooks/useHandlerOnEvent";
import {CloseWindowIcon} from "../Icons";
import {MetaData} from "../CardsList/Card/TextCounter/MetaData";
import {EColors, Text} from "../Text";
import {MenuItemsList} from "../CardsList/Card/Menu/MenuItemsList";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {Break} from "../Break";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {updateComment} from "../../store/comment/actions";
import {useNavigate, useParams} from "react-router-dom";

// interface IPost {
//   permalink?: string;
//   onClose?: () => void;
// }

interface IPostData {
  author?: string;
  title?: string;
  selftext?: string;
  score?: string;
  created_utc?: string;
  icon?: string;
  subreddit?: string;
}

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const permalink = `/comments/${id}.json`
  // const [ref] = useHandlerOnEvent(props.onClose);
  // const [postDetailedData] = props.permalink ? usePostDetailedData(props.permalink.replace(/\/$/, '.json')) : [];
  const value = useSelector<RootState, string>(state => state.comment);
  const dispatch = useDispatch();
  // const permalink = '/r/AskReddit/comments/rx43r9/what_science_fiction_or_fantasy_show_is_worth/'
  const navigate = useNavigate();
  const goBack = () => navigate('/posts');

  const [postDetailedData] = usePostDetailedData(permalink.replace(/\/$/, '.json'));

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        goBack();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  if (!Object.keys(postDetailedData).length) return null;

  let {
    author,
    title,
    selftext,
    score,
    created_utc,
    icon,
    subreddit,
  }: IPostData = postDetailedData;

  icon = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png'

  return (
      <div className={styles.modalContainer} ref={ref}>
        <button className={styles.closeButton} onClick={goBack}>
          <CloseWindowIcon/>
        </button>

        <div className={styles.modalHeader}>
          <KarmaCounter score={score}/>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.metaWrapper}>
              <MetaData author={author} created_utc={created_utc} icon={icon}/>
              <span className={styles.subreddit}>{subreddit}</span>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <Text As={'p'} size={14} color={EColors.black}>
            {selftext}
          </Text>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.controlsWrapper}>
          <MenuItemsList postId={'123'} isDivider={false} horizontal={true} textSize={14}/>
          <Text size={14} color={EColors.grey99}>54% Проголосовали</Text>
        </div>

        <CommentForm />
        <Break size={35} top={true}/>
        <Comments/>

      </div>
  );
}
