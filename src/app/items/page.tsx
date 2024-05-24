import { fetchSearchResults } from '@/services/search';
import styles from './items.module.scss';
import { ItemCard } from '@/components/ui/ItemCard';

export default async function SearchResults({ searchParams }: { searchParams: { search: string } }) {
  const search = searchParams.search || '';
  
  try {
    const results = await fetchSearchResults(search);
    
    if (!results.items.length) {
      return <div>no se encontraron resultados para &quot;{search}&quot;</div>;
    }

    return (
      <div className={styles['ui-container']}>
        <aside className={styles['ui-container__sidebar']}>
          <h2>Categorías</h2>
          <ul>
            {results.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </aside>
        <section className={styles['ui-container__results']}>
          <ol className={styles['ui-container__results--stack']}>
            {results.items.map((item) => (
              <li key={item.id} className={styles['ui-container__results--item']}>
                <ItemCard item={item}/>
              </li>
            ))}
          </ol>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error fetching search results:', error);
    return <div>Error fetching search results</div>;
  }
}
