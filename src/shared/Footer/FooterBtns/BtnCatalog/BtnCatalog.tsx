import React from 'react';
import styles from './btncatalog.scss';
import {EIcon, Icon} from "../../../Icon";
import {EBold, Text} from "../../../Text";
import classNames from "classnames";
import {Link} from "react-router-dom";

export function BtnCatalog() {
  const btnCatalogClasses = classNames("btn-reset", "footerBtn",styles.catalog)
  return (
      <Link to="/shop/" className={btnCatalogClasses}>
            <span className={styles.svgCatalog}>
              <Icon name={EIcon.Catalog} />
            </span>
        <Text size={12} lheight={14} bold={EBold.medium}>Каталог</Text>
      </Link>
  );
}
