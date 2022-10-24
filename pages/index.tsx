import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <p className={styles['title-homepage']}>My Website</p>
    </>
  )
}

export default Home
