import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'


function Header() {
  return (

<header className={styles.main_header}>
    <div className={styles.navbar_brand}> 
   
    <h3>Netflix </h3>
    <Link href="/" > 
  
        <Image src="/netflix.png" alt= " my logo" width={50} height={40} />
    </Link>
 
    </div>
    <Nav/>
</header>
   
  )
}

export default Header