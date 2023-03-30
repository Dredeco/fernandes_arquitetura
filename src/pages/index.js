import Head from 'next/head'
import styles from '@/styles/Home.module.sass'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import FirstCTA from '@/components/FirstCTA'
import Services from '@/components/Services'
import About from '@/components/About'
import Projects from '@/components/Projects'
import SecondCTA from '@/components/SecondCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Baskervville&family=Lato&display=swap" rel="stylesheet" />
      </Head>
      <main className='main'>
        <Navbar />
        <Slider />
        <FirstCTA />
        <Services />
        <About />
        <Projects />
        <SecondCTA />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
