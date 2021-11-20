import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

// interface IPostData {

// }

export function usePostData() {
  // const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext)

  useEffect(() => {
    // axios.get('https://oauth.reddit.com/best', {
    //   headers: { Authorization: `bearer ${token}`}
    // })
    axios.get('https://www.reddit.com/r/popular/best.json?limit=1&sr_detail=true')
      .then((resp) => {
        const postData = resp.data;
        // setData( { name: userData.name, iconImg: userData.icon_img });
        console.log('postData');
        console.log(postData);
        const myArr = postData.data.children[0];
        console.log(myArr.data.author);
        console.log(myArr.data.title);
        console.log(myArr.data.score);
        console.log(myArr.data.thumbnail);
        console.log(myArr.data.created);
        console.log(myArr.data.id);
        console.log(myArr.data.icon_img);

      })
      .catch(console.log);

    console.log('usePostData');
  }, [])

  return []
}

// usePostData();
