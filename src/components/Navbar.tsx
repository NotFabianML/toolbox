import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

import reactLogo from '../assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import '../App.css'

const Navbar = () => {
    const { t, i18n } = useTranslation("global");

    const [count, setCount] = useState(0)
    return (
        <>
            <h1 className='text-xl text-alternative font-bold'>{t('greeting')}</h1>
            <div>
                <Link to="https://electron-vite.github.io">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </Link>
                <Link to={"/tool"}>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </Link>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default Navbar