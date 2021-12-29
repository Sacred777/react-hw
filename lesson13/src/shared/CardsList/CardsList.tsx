import React, {useEffect, useState} from 'react';
import {Card} from './Card';
import styles from './cardslist.css';
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

export function CardsList() {
  const token = useSelector<RootState, string>(state => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');

  useEffect(() => {
    if (!token || token === 'undefined') return;

    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const {data: {data: {children}}} = await axios.get('https:/oauth.reddit.com/r/popular/best.json?&sr_detail=true', {
          headers: {Authorization: `bearer ${token}`},
          params: {
            limit: 10,
          },
        });

        setPosts(children);
      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    load();
  }, [token])

  return (
      <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
            <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
        )}

        {posts.map(post => (
            <Card
                key={post.data.id}
                itemData={post.data}
            />
        ))}

        {loading && (
          <div style={{textAlign: 'center'}}>Загрузка...</div>
        )}

        {errorLoading && (
            <div role="alert" style={{textAlign: 'center'}}>
              {errorLoading}
            </div>
        )}
      </ul>
  );
}
