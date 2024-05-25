import Image from 'next/image'
import React from 'react'
import styles from './ItemGallery.module.scss'
import { Item } from '@/types/item';

interface ItemGalleryProps {
    item: Item;
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({ item }) => {
  return (
    <figure className={styles['container']}>
          <Image src={item.picture} alt={item.title} height={100} width={100} layout="responsive" objectFit="contain"/>
    </figure>
  )
}
