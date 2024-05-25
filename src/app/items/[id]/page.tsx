import { fetchItemDetails } from '@/services/item';
import styles from './itemsID.module.scss'
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface ItemPageProps {
  params: {
    id: string;
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { id } = params;
  const { item } = await fetchItemDetails(id);

  const conditionText = item.condition === 'new' ? 'Nuevo' : 'Usado';

  
  return (
    <section className={styles['item-container']}>
      <div className={styles['item-container--left']}>
        <figure className={styles['item-container--left__img']}>
          <Image src={item.picture} alt={item.title} height={100} width={100} layout="responsive" objectFit="contain"/>
        </figure>
        <h2>Descripción</h2>
        <p>{item.description}</p>  
      </div>
      <div className={styles['item-container--right']}>
        <p>{conditionText}</p>   
        <h1 className={styles['item-title']}>{item.title}</h1> 
        <p className={styles['item-price']} >{item.price.amount.toLocaleString("es-AR", {
              currency: item?.price?.currency,
              style: 'currency',
            })}
        </p>
        <div className={styles['button-container']}>
          <Button onClick={() => console.log('comprar')} variant="primary">Comprar ahora</Button>
          <Button onClick={() => console.log('carrito')} variant="secondary">Agregar al carrito</Button>
        </div>
      </div>
    </section>
  )
}
