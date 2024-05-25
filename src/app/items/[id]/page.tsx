import { fetchItemDetails } from '@/services/item';
import styles from './itemsID.module.scss'
import { ItemGallery } from '@/components/ui/ItemGallery';
import { ItemDetails } from '@/components/ui/ItemDetails';

interface ItemPageProps {
  params: {
    id: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { id } = params;
  const { item } = await fetchItemDetails(id);

  return (
    <section className={styles['item-container']}>
      <div className={styles['item-container--left']}>
          <ItemGallery item={item} />
        <h2>Descripción</h2>
        <p>{item.description}</p>  
      </div>
      <div className={styles['item-container--right']}>
        <ItemDetails item={item} />
      </div>
    </section>
  )
}
