import React from 'react';
import styles from './text.scss';
import classNames from 'classnames'

export enum EColor {
  standart = 'standart',
  black    = 'black',
  white    = 'white',
  red      = 'red'
}

export enum EBold {
  regular    = 'regular',
  medium     = 'medium',
  semibold   = 'semibold',
  bold       = 'bold',
}
type TSizes = 22 | 20 | 18 | 16 | 15 | 14 | 12 | 10 | 8

type THeight = 28 | 24 | 22 | 21 | 20 | 18 | 16 | 15 | 14 | 13 | 12 | 11 | 10
interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  children?: React.ReactNode;
  size?: TSizes;
  color?: EColor;
  bold?: EBold;
  lheight?: THeight;
  className?: string;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    size= 10,
    lheight = 10,
    color = EColor.standart,
    bold = EBold.regular,
    className
  } = props
  const classes = classNames(
    styles[`s${size}`],
    styles[`lh${lheight}`],
    styles[color],
    styles[bold],
    className
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
