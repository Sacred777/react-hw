import { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

interface IPostDetailedData {
  postCardData?: [];
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
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    if (token !== 'undefined' && token) {
      axios.get('https:/oauth.reddit.com/' + permalink, {
        headers: {Authorization: `bearer ${token}`}
      })
          .then((resp) => {
            const postDetailedData = resp.data[0].data.children[0].data;
            setData(postDetailedData);
          })
          .catch(console.log);
    }
  }, [token])

  return [data];
}
