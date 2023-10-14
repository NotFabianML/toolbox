import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OcrImage from './pages/OcrImage';
import Processing_image from './pages/Processing_image';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocr-image" element={<OcrImage />} />
        <Route path="/processing-image" element={<Processing_image />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
