import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import {
  MenuIcon,
  BlockIcon,
  CommentIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
  AudioIcon,
  CodeIcon,
  DocumentIcon,
  LinkIcon,
  ParagraphIcon,
  PdfIcon,
  PenIcon,
  PeopleIcon,
  PictureIcon,
  QuoteIcon,
  UpdateIcon,
  UploadIcon, ArrowUpIcon, ArrowDownIcon
} from '../../shared/Icons';

const icons = {
  menu:    MenuIcon,
  block:   BlockIcon,
  comment: CommentIcon,
  save:    SaveIcon,
  share:   ShareIcon,
  warning: WarningIcon,
  audio: AudioIcon,
  code: CodeIcon,
  document: DocumentIcon,
  link: LinkIcon,
  paragraph: ParagraphIcon,
  pdf: PdfIcon,
  pen: PenIcon,
  people: PeopleIcon,
  picture: PictureIcon,
  quote: QuoteIcon,
  update: UpdateIcon,
  upload: UploadIcon,
  arrowUp: ArrowUpIcon,
  arrowDown: ArrowDownIcon,
}

export enum EIcons {
  menu    = 'menu',
  block   = 'block',
  comment = 'comment',
  save    = 'save',
  share   = 'share',
  warning = 'warning',
  audio   = 'audio',
  code    = 'code',
  document = 'document',
  link    = 'link',
  paragraph = 'paragraph',
  pdf     = 'pdf',
  pen     = 'pen',
  people  = 'people',
  picture = 'picture',
  quote   = 'quote',
  update  = 'update',
  upload  = 'upload',
  arrowUp = 'arrowUp',
  arrowDown = 'arrowDown',
}

export type TSizes = 20 | 18 | 16 | 14 | 12| 10;

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
