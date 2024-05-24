import Link from 'next/link'
import styles from './NavBar.module.scss'
import Image from 'next/image'

export const NavBar = () => {
  return (
    <header className={styles['nav-header']}>
      <div className={styles['nav-header__nav-bounds']}>
          <Link href='/' className={styles['nav-header__logo']}>
            <Image
              src="/images/logo.png"
              width={134}
              height={34}
              alt="Logo"
            />
          </Link>
          <div className={styles['nav-header__search-box']}>
          </div>
      </div>
    </header>
  )
}
