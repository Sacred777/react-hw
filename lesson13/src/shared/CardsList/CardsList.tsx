import React, {useEffect, useRef, useState} from 'react';
import {Card} from './Card';
import styles from './cardslist.css';
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {Text} from "../Text";

export function CardsList() {
  const token = useSelector<RootState, string>(state => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState((''));
  const [loadingCount, setLoadingCount] = useState(2);

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      if (!token || token === 'undefined') return;

      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get('https:/oauth.reddit.com/r/popular/best.json?&sr_detail=true', {
          headers: {Authorization: `bearer ${token}`},
          params: {
            limit: 10,
            after: nextAfter,
          },
        });

        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...children));
        setLoadingCount(prevLoadingCount => --prevLoadingCount);
      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadingCount) {
        load();
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current, nextAfter, token, loadingCount]);

  function handleClick() {
    setLoadingCount(2);
  }

  return (
      <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
            <div style={{textAlign: 'center'}}>
              <Text size={20}>Нет ни одного поста</Text>
            </div>
        )}

        {posts.map(post => (
            <Card
                key={post.data.id}
                itemData={post.data}
            />
        ))}

        <div ref={bottomOfList}/>

        {loading && (
            <div style={{textAlign: 'center'}}>
              <Text size={20}>Загрузка...</Text>
           </div>
        )}

        {!loadingCount && (
          <div style={{padding: "20px 0"}}>
            <button className={styles.button} type={"submit"} onClick={handleClick}>Загрузить ещё</button>
          </div>
        )}

        {errorLoading && (
            <div role="alert" style={{textAlign: 'center'}}>
              <Text size={20}>{errorLoading}</Text>
            </div>
        )}
      </ul>
  );
}
