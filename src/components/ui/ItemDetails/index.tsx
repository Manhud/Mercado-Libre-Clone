'use client'

import React from 'react'
import styles from './ItemDetails.module.scss'
import { Item } from '@/types/search';
import { Button } from '../Button';

interface ItemDetailsProps {
    item: Item;
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {

  const conditionText = item.condition === 'new' ? 'Nuevo' : 'Usado';

  return (
    <>
        <p>{conditionText}</p>   
        <h1 className={styles['item-title']}>{item.title}</h1> 
        <p className={styles['item-price']} >{item.price.amount.toLocaleString("es-AR", {
                currency: item?.price?.currency,
                style: 'currency',
            })}
        </p>
        <div className={styles['button-container']}>
            <Button onClick={()=> {}}  variant="primary">Comprar ahora</Button>
            <Button onClick={()=> {}} variant="secondary">Agregar al carrito</Button>
        </div>
    </>
  )
}

