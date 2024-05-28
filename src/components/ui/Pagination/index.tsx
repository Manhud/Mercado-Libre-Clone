import Link from 'next/link';
import styles from './Pagination.module.scss';

interface PaginationProps {
  search: string;
  totalPages: number;
  currentPage: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ search, totalPages, currentPage, limit }) => {
  const maxPagesToShow = 10;
  const startPage = Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1;
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  return (
    <div className={styles.pagination}>
      {startPage > 1 && (
        <Link
          href={`/items?search=${search}&limit=${limit}&offset=${(startPage - maxPagesToShow - 1) * limit}`}
          className={styles.pagination__button}
        >
            <span className={styles.icon}>&lt;</span> Anterior
        </Link>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <Link
          key={index}
          href={`/items?search=${search}&limit=${limit}&offset=${(startPage + index - 1) * limit}`}
          className={startPage + index === currentPage ? styles.active : ''}
        >
          {startPage + index}
        </Link>
      ))}
      {endPage < totalPages && (
        <Link
          href={`/items?search=${search}&limit=${limit}&offset=${endPage * limit}`}
          className={styles.pagination__button}
        >
          Siguiente <span className={styles.icon}>&gt;</span>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
