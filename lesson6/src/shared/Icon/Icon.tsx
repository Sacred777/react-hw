import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon } from '../../shared/Icons';

export enum EIcons {
  block   = 'BlockIcon',
  comment = 'CommentIcon',
  save    = 'SaveIcon',
  share   = 'ShareIcon',
  warning = 'WarningIcon',
}

// const icons = {
//   block: BlockIcon,
//   comment: CommentIcon,
//   save: SaveIcon,
//   share: ShareIcon,
//   warning: WarningIcon,
// }

type ISizes = 12 | 14 | 16;

interface IIconProps {
  name: EIcons;
  size?: ISizes;
}

export function Icon( props: IIconProps ) {
  const {
    name,
    size = 16,
  } = props;

  const classes = classNames(
    styles[`i${size}`],
  )

  const IconComponent: any = name;

  return (
    <IconComponent className={ classes } />
  );
}
