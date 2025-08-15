import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import styles from './App.module.css'

function App() {
  return (
    <div id='top'>
      <Header />
      <Hero />
      <main className={styles.appHeader}>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App
