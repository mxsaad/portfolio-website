import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gradient-to-tr from-black to-mk-gray'>
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
