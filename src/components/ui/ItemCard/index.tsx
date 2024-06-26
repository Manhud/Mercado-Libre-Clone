import { Item } from '@/types/item';
import styles from './ItemCard.module.scss';
import Image from 'next/image';
import Link from "next/link";
import { formatTitleForUrl } from '@/utils/formatUrl';

interface ProductProps {
    item: Item;
}

export const ItemCard: React.FC<ProductProps> = ({ item }) => {
  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-card']}>
        <Link href={`/items/${formatTitleForUrl(item.title)}/${item.id}`}>
          <figure className={styles['item-image']}>
            <Image 
              src={item.picture} 
              alt={item.title} 
              width={160} 
              height={160} 
              className={styles['item-image__img']}
            />
          </figure>
         </Link>
        <div className={styles['item-content-wrapper']}>
          <Link href={`/items/${formatTitleForUrl(item.title)}/${item.id}`} className={styles['item-content-wrapper--title']}>
              {item.title}
          </Link>
          <div className={styles['item-content-wrapper__columns']}>
            <div className={styles['item-content-wrapper__columns--left']}>
              <div className={styles['item-group']}>
                <span className={styles['item-group--amount']}>
                  {item?.price?.amount?.toLocaleString("es-CO", {
                    currency: item?.price?.currency,
                    style: 'currency',
                  })}
                </span>
              </div>
            </div>
            <div className={styles['item-content-wrapper__columns--right']}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
