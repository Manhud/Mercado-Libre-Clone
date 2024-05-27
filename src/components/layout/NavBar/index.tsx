'use client'

import Link from 'next/link'
import styles from './NavBar.module.scss'
import Image from 'next/image'
import SearchBox from '@/components/common/SearchBox'
import { useWindowSize } from '@/hooks/useWindowSize'
export const NavBar = () => {

  const { width } = useWindowSize();
  const isSmallScreen = width ? width <= 768 : false;

  return (
    <header className={styles['nav-header']}>
      <div className={styles['nav-header__nav-bounds']}>
          <Link href='/' className={styles['nav-header__logo']}>
            <Image
              src={isSmallScreen ? '/images/logo__small.png' : '/images/logo.png'}
              width={isSmallScreen ? 44 : 134}
              height={isSmallScreen ? 32 : 34}
              alt="Logo"
            />
          </Link>
          <div className={styles['nav-header__search-box']}>
            <SearchBox/>
          </div>
      </div>
    </header>
  )
}
