import React from 'react';
import styles from './btnbasket.scss';
import {EIcon, Icon} from "../../../Icon";
import {EBold, EColor, Text} from "../../../Text";
import classNames from "classnames";
import {Link} from "react-router-dom";

export function BtnBasket() {
  const btnBasketClasses = classNames("btn-reset", "footerBtn", styles.basket)

  return (
      <Link className={btnBasketClasses} to="/shop/basket">
        <span className={styles.svgBasket}>
          <Icon name={EIcon.Basket} />
        </span>
        <Text className={styles.text} size={12} lheight={14} bold={EBold.medium} color={EColor.red}>Корзина</Text>
        <Text className={styles.count} size={8} lheight={14} color={EColor.black} bold={EBold.medium}>0</Text>
      </Link>
  );
}
