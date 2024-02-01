import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import About from './components/Section/About/About'
import ContactMe from './components/Section/ContactMe/ContactMe'
import Experience from './components/Section/Experience/Experience'
import Projects from './components/Section/Projects/Projects'

/**
 * Voy a tener un div y dentro voy a tener el navbar lateral y el resto de la pagina
 * en el resto de la pagina se va a diviri en dos, uno es la seccion principal/header y las otras secciones.
 * Cada seccion se va a divir en dos en un principio y despues vere.
 */

function App() {

  return (
    <div className='bg-primary-500'>
      {/* Navbar */}
      <Navigation />
      {/* Main */}
      <main className="flex min-h-screen flex-col items-center justify-between mx-4">
        {/* <Conversor /> */}
        <Header />
        <div>
          <About />
          <Experience />
          <Projects />
          <ContactMe />
        </div>
      </main>
    </div>
  )
}

export default App
