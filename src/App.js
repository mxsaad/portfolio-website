import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className='bg-gradient-to-tr from-black to-mk-gray'>
      <NavBar />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
