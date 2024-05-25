import React from 'react';
import styles from './CategoryBreadcrumb.module.scss';

interface CategoryBreadcrumbProps {
  categories: string[];
}

const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({ categories }) => {
  return (
    <div className={styles.breadcrumb}>
      {categories?.map((category, index) => (
        <span key={index} className={styles.breadcrumb__item}>
          {category}
          {index < categories.length - 1 && (
            <span className={styles.breadcrumb__separator}> &gt; </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default CategoryBreadcrumb;
