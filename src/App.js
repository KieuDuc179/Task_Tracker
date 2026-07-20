import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Feature from './pages/Feature';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;