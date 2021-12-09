import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPostDetailedData {
  postCardData?: [];
  // author?: string;
  author?: string;
  title?: string;
  selftext?: string;
  score?: string;
  created_utc?: string;
  icon?: string;
  subreddit?: string;
}

export function usePostDetailedData(permalink: string) {
  const [data, setData] = useState<IPostDetailedData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token !== 'undefined' && token) {
      axios.get('https:/oauth.reddit.com/' + permalink, {
        headers: {Authorization: `bearer ${token}`}
      })
          .then((resp) => {
            const postDetailedData = resp.data[0].data.children[0].data;
            setData(postDetailedData);
            // console.log('usePostDetailedData');
            // console.log(postDetailedData.author);
          })
          .catch(console.log);
    }
  }, [token])

  return [data];
}
