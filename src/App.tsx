import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Processing_image from './pages/Processing_image';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processing-image" element={<Processing_image />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
