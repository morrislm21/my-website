import Header from './components/Header'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.appHeader}>
        <h2>Welcome to My Website</h2>
        <p>This is the place where you can find out more about me!</p>
      </main>
    </div>
  )
}

export default App
