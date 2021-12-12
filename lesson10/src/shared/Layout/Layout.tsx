import React, {useEffect} from 'react';
import styles from './layout.css';
import {useDispatch} from "react-redux";
import {setToken} from "../../store";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const dispatch = useDispatch();

  useEffect(() => {
      if (window.__token__) {
        dispatch(setToken(window.__token__));
      }
  }, [])

  return (
    <div className={styles.layout}>
      { children }
    </div>
  );
}
