import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tool from './pages/tool';
import Home from './pages/Home';
// import { useTranslation } from 'react-i18next'

function App() {
  // const { t, i18n } = useTranslation("global");

  return (
    // <>
    //   <div>
    //     <a href="https://electron-vite.github.io" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <>
    // <h1>{t('greeting')}</h1>
    //   <Navbar />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool" element={<Tool />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
