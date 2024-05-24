'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './SearchBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/items?search=${query}`);
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSearch}>
      <div className={styles.searchBox__inputContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos, marcas y más..."
          className={styles.searchBox__input}
        />
        <button type="submit" className={styles.searchBox__button}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
