import Header from './components/Header'
import About from './components/About'
import styles from './App.module.css'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.appHeader}>
        <About />
        <Portfolio />
      </main>
    </div>
  )
}

export default App
