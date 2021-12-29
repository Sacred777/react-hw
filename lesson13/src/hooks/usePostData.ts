import { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

interface IPostData {
  postData?: [];
}

export function usePostData() {
  const [data, setData] = useState<IPostData>({});
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    if (!token || token === 'undefined') return;
      axios.get('https:/oauth.reddit.com/r/popular/best.json?limit=7&sr_detail=true', {
        headers: {Authorization: `bearer ${token}`}
      })
          .then((resp) => {
            const postData = resp.data.data.children;
            setData({postData});
          })
          .catch(console.log);
  }, [token])

  return [data];
}
