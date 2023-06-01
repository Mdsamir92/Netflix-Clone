import MovieCard from '../component/MovieCard';
import styles from '@/app/styles/common.module.css'

async function movie () {

  await new Promise(resolve => setTimeout(resolve, 2000));


const url = process.env.RAPID_KEY;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f03a7f5f83mshda5658009639419p176df6jsnb7c90e245bb0',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
  const res = await fetch(url,options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

return (
    <div>
    <section className={styles.moviesSection}>
    <div className={styles.container}>
    <h1>Web series &  Movies</h1>
    <div className={styles.card_section}>
    {
      main_data.map((curElem) =>{
        return<MovieCard key={curElem.id} {...curElem} />
           })
    }
   </div>
    </div>

    </section>
     </div>
  )
}

export default movie 