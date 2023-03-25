import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NavBar />
          <Hero />
        </div>
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
