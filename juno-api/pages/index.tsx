import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/LandingPage/LandingPage'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <LandingPage/>
  )
}

export default Home
