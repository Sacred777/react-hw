import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPostData {
  postData?: [];
}

export function usePostData() {
  const [data, setData] = useState<IPostData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token !== 'undefined' && token) {
      axios.get('https:/oauth.reddit.com/r/popular/best.json?limit=7&sr_detail=true', {
        headers: {Authorization: `bearer ${token}`}
      })
          .then((resp) => {
            const postData = resp.data.data.children;
            setData({postData});
          })
          .catch(console.log);
   }
  }, [token])

  return [data];
}
