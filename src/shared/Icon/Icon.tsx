import React from 'react';
import styles from './icon.scss';
import {CatalogIcon} from "../Icons/CatalogIcon";
import {BasketIcon} from "../Icons/BasketIcon";

export enum EIcon {
    Catalog = "Catalog",
    Basket  = "Basket"
}

interface IIconProps {
    name: EIcon,
}

export function Icon(props: IIconProps) {
    const {name} = props
    switch (name) {
        case EIcon.Catalog: return (
            <CatalogIcon />
        )
        case EIcon.Basket: return (
            <BasketIcon />
        )
    }
}

