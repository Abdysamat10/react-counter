import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState('');

    const onCountClick = () => {
        setCount(+number + count);
    };

    return (
        <div className='app'>
            <div className='container'>
                <h1>Счетчик - <span>{count}</span></h1>
                <p><span>Увеличить</span> счетчик</p>
                <hr />
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type='number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <button
                        className='wave-btn'
                        onClick={onCountClick}
                    >
                        <span class='wave-btn__text'>Обновить</span>
                        <span class='wave-btn__waves'></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
