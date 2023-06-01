import styles from '@/app/styles/herosection.module.css'
import Commonstyles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
   <main className={styles.main_section}>
   
       <div className={Commonstyles.container}>
       <div className={Commonstyles.grid_two_section}>
       <div className={styles.hero_content}>
       <h1>let's watch movie together</h1>

       <Link href="/movie">
       <button>
        Explore movies
       </button>
       </Link>
       <p>
       Stories move us.
       They make us feel more emotion, see new perspectives,
       and bring us closer to each other.
       At Netflix, we want to entertain the world. Whatever your taste, 
       and no matter where you live, we give you access to best-in-class TV series,
       documentaries, feature films and mobile games. Our members control what they want to watch,
       when they want it, in one simple subscription.
       We’re streaming in more than 30 languages and 190 countries, 
       great stories can come from anywhere and be loved everywhere. 
      
        </p>
       
       </div>
        <div className={styles.hero_image}>
            <Image src="/hero.jpg" alt="hero image netflix" width={500} height={500} />
        </div>

       </div>

       </div>
       <div className={styles ["custom-shape-divider-bottom-1685284040"]}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
      className={styles['shape-fill']}></path>
    </svg>
</div>
   
 
   </main>
  )
}

export default Hero