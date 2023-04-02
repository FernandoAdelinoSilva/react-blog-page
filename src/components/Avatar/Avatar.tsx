import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: IProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
