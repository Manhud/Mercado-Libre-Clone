import { fetchItemDetails } from '@/services/item';
import styles from './itemsID.module.scss'
import { ItemGallery } from '@/components/ui/ItemGallery';
import { ItemDetails } from '@/components/ui/ItemDetails';
import CategoryBreadcrumb from '@/components/ui/CategoryBreadcrumb';
import { Metadata } from 'next';
import { decodeTitleFromUrl, formatTitleForUrl } from '@/utils/formatUrl';

interface ItemPageProps {
  params: {
    id: string;
    title: string;
  };
}
export async function generateMetadata({ params }: ItemPageProps): Promise<Metadata> {
  const search = decodeTitleFromUrl(params.title) || '';
  return {
    title: `${search} | MercadoLibre`,
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { id } = params;
  const { item } = await fetchItemDetails(id);

  return (
    <div className={styles.wrapper}>
    <CategoryBreadcrumb categories={item.categories} className={styles["category-breadcrumb"]} />
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
    </div>
  )
}
