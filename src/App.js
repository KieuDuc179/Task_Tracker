import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';

const Feature = lazy(() => import('./pages/Feature'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/feature"
              element={
                <Suspense fallback={<Spinner animation="border" />}>
                  <Feature />
                </Suspense>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;