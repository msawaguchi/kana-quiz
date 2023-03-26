import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function App() {
  const hiragana = [
    { romanji: 'a', hiragana: 'ア' },
		{ romanji: 'i', hiragana: 'イ' },
		{ romanji: 'u', hiragana: 'ウ' },
		{ romanji: 'e', hiragana: 'エ' },
		{ romanji: 'o', hiragana: 'オ' },
		{ romanji: 'ka', hiragana: 'カ' },
		{ romanji: 'ki', hiragana: 'キ' },
		{ romanji: 'ku', hiragana: 'ク' },
		{ romanji: 'ke', hiragana: 'ケ' },
		{ romanji: 'ko', hiragana: 'コ' },
		{ romanji: 'sa', hiragana: 'サ' },
		{ romanji: 'shi', hiragana: 'シ' },
		{ romanji: 'su', hiragana: 'ス' },
		{ romanji: 'se', hiragana: 'セ' },
		{ romanji: 'so', hiragana: 'ソ' },
		{ romanji: 'ta', hiragana: 'タ' },
		{ romanji: 'chi', hiragana: 'チ' },
		{ romanji: 'tsu', hiragana: 'ツ	' },
		{ romanji: 'te', hiragana: 'テ' },
		{ romanji: 'to', hiragana: 'ト' },
		{ romanji: 'na', hiragana: 'ナ' },
		{ romanji: 'ni', hiragana: 'ニ' },
		{ romanji: 'nu', hiragana: 'ヌ' },
		{ romanji: 'ne', hiragana: 'ネ' },
		{ romanji: 'no', hiragana: 'ノ' },
		{ romanji: 'ha', hiragana: 'ハ' },
		{ romanji: 'hi', hiragana: 'ヒ' },
		{ romanji: 'fu', hiragana: 'フ' },
		{ romanji: 'he', hiragana: 'ヘ' },
		{ romanji: 'ho', hiragana: 'ホ' },
		{ romanji: 'ma', hiragana: 'マ' },
		{ romanji: 'mi', hiragana: 'ミ' },
		{ romanji: 'mu', hiragana: 'ム' },
		{ romanji: 'me', hiragana: 'メ' },
		{ romanji: 'mo', hiragana: 'モ' },
		{ romanji: 'ya', hiragana: 'ヤ' },
		{ romanji: 'yu', hiragana: 'ユ' },
		{ romanji: 'yo', hiragana: 'ヨ' },
		{ romanji: 'ra', hiragana: 'ラ' },
		{ romanji: 'ri', hiragana: 'リ' },
		{ romanji: 'ru', hiragana: 'ル' },
		{ romanji: 're', hiragana: 'レ' },
		{ romanji: 'ro', hiragana: 'ロ' },
		{ romanji: 'wa', hiragana: 'ワ' },
		{ romanji: 'wo', hiragana: 'ヲ' },
		{ romanji: 'n', hiragana: 'ン' }
  ];

  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length);
    setCurrent(randomIndex);
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();

    if (input.toLowerCase() === hiragana[current].romanji) {
      setStreak(streak + 1);
      setMaxStreak(Math.max(streak + 1, maxStreak));
      setError(false);

      localStorage.setItem('maxStreakKatakana', Math.max(streak, maxStreak));
      localStorage.setItem('streakKatakana', streak + 1);
    } else {
      setStreak(0);
      setError(`Wrong! The correct answer for ${hiragana[current].hiragana} is ${hiragana[current].romanji}.`);

      localStorage.setItem('streak', 0);
    }

    setInput('');
    setRandomHiragana();
  }

  useEffect(() => {
    setRandomHiragana();
    setStreak(parseInt(localStorage.getItem('streakKatakana')) || 0);
    setMaxStreak(parseInt(localStorage.getItem('maxStreakKatakana')) || 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
    <header className="p-6 mb-8">
      <h1 className="text-2xl font-bold uppercase">Katakana Quiz</h1>
      <div className="flex flex-row my-5">
        <p className="basis-1/2"><label className="text-slate-300">score:</label> {streak}</p>
        <p className="basis-1/2"><label className="text-slate-300">max score:</label>  {maxStreak}</p>
      </div>
    </header>

    <div className="text-9xl font-bold mb-8">
      <p>{hiragana[current].hiragana}</p>
    </div>

    <div className="mb-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2" />
      </form>
    </div>
    {error && 
      <div>
        <p>{ error }</p>
      </div>
    }

   <div className="flex flex-row my-5 place-content-center">
      <Link to="/"><div className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase ">Hiragana Quiz</div></Link>
      <Link to="/kanji-number-quiz"><div  className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase">Number Quiz</div></Link>
    </div>
  </div>
  );
}

export default App
