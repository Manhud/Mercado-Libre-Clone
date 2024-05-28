import { fetchSearchResults } from '@/services/search';
import styles from './items.module.scss';
import { ItemCard } from '@/components/ui/ItemCard';
import CategoryBreadcrumb from '@/components/ui/CategoryBreadcrumb';
import Pagination from '@/components/ui/Pagination';

interface SearchResultsProps {
  searchParams: {
    search: string;
    limit?: string;
    offset?: string;
  };
}

export default async function SearchResults({ searchParams }: SearchResultsProps) {
  const search = searchParams.search || '';
  const limit = parseInt(searchParams.limit || '10');
  const offset = parseInt(searchParams.offset || '0');
  
  
  try {
    const results = await fetchSearchResults(search, limit, offset);
    
    if (!results.items.length) {
      return <div>no se encontraron resultados para &quot;{search}&quot;</div>;
    }

    const totalPages = Math.ceil(results.total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return (
      <div className={styles['ui-container']}>
        <aside className={styles['ui-container__sidebar']}>
        <CategoryBreadcrumb categories={results.categories} />
        </aside>
        <section className={styles['ui-container__results']}>
          <ol className={styles['ui-container__results--stack']}>
            {results.items.map((item) => (
              <li key={item.id} className={styles['ui-container__results--item']}>
                <ItemCard item={item}/>
              </li>
            ))}
          </ol>
          <Pagination
            search={search}
            totalPages={totalPages}
            currentPage={currentPage}
            limit={limit}
          />
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error fetching search results:', error);
    return <div>Error fetching search results</div>;
  }
}
