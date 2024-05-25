import React from 'react';
import styles from './CategoryBreadcrumb.module.scss';

interface CategoryBreadcrumbProps {
  categories: string[] | undefined;
  className?: string ;
}

const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({ categories , className}) => {
  return (
    <div className={`${styles.breadcrumb} ${className}`}>
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
