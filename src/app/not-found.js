import Link from 'next/link'
import styles from '@/app/styles/common.module.css'

function NotFound() {
  return (
   <section className={styles.container}>
   <div className={styles.error_page}>
  
   <h2>page not found</h2>
   <Link href={"/"}>
    <button>
      go to home page
    </button>
   </Link>
   </div>

   </section>
  )
}

export default NotFound