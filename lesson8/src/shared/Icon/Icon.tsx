import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { MenuIcon, BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon } from '../../shared/Icons';

const icons = {
  menu:    MenuIcon,
  block:   BlockIcon,
  comment: CommentIcon,
  save:    SaveIcon,
  share:   ShareIcon,
  warning: WarningIcon,
}

export enum EIcons {
  menu    = 'menu',
  block   = 'block',
  comment = 'comment',
  save    = 'save',
  share   = 'share',
  warning = 'warning',
}

type TSizes = 20 | 16 | 14 | 12| 10;

interface IIconProps {
  name: EIcons;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Icon( props: IIconProps ) {
  const {
    name,
    size = 16,
    mobileSize,
    tabletSize,
    desktopSize
  } = props;

  const classes = classNames(
    styles[`i${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize},
    { [styles[`t${tabletSize}`]]: tabletSize},
    { [styles[`d${desktopSize}`]]: desktopSize},
  );

  const IconComponent = icons[name];

  return (
    IconComponent( {className: classes} )
  );
}
