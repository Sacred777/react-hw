import React from 'react';
import styles from './dropdown.css';
import {Portal} from "../Portal";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown( {button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps ) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const [style, setStyle] = React.useState({});

  const handleOpen = (event: React.MouseEvent) => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
      setStyle( {
        top: event.pageY + 20 + 'px',
        left: event.pageX + 'px',
      });
    }
  };

  return (

    <div className={styles.container}>
      <div onClick={ handleOpen }>
        { button }
      </div>
      {isDropdownOpen && (
        <Portal>
          <div className={styles.listContainer} style={style}>
            <div className={styles.list} onClick={ () => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
