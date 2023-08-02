import React from 'react';
import styles from './footer.scss';
import classNames from "classnames";
import {EIcon, Icon} from "../Icon";
import {EBold, EColor, Text} from "../Text";
import {BtnCatalog} from "./FooterBtns/BtnCatalog";
import {BtnBasket} from "./FooterBtns/BtnBasket";


export function Footer() {

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerBottom}>
          <BtnCatalog />
          <BtnBasket />
          <span className={styles.verticalLine} />
        </div>
      </div>
    </div>
  );
}
