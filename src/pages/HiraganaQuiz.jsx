import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function HiraganaQuiz() {
  const hiragana = [
    { romanji: 'a', hiragana: 'あ' },
		{ romanji: 'i', hiragana: 'い' },
		{ romanji: 'u', hiragana: 'う' },
		{ romanji: 'e', hiragana: 'え' },
		{ romanji: 'o', hiragana: 'お' },
		{ romanji: 'ka', hiragana: 'か' },
		{ romanji: 'ki', hiragana: 'き' },
		{ romanji: 'ku', hiragana: 'く' },
		{ romanji: 'ke', hiragana: 'け' },
		{ romanji: 'ko', hiragana: 'こ' },
		{ romanji: 'sa', hiragana: 'さ' },
		{ romanji: 'shi', hiragana: 'し' },
		{ romanji: 'su', hiragana: 'す' },
		{ romanji: 'se', hiragana: 'せ' },
		{ romanji: 'so', hiragana: 'そ' },
		{ romanji: 'ta', hiragana: 'た' },
		{ romanji: 'chi', hiragana: 'ち' },
		{ romanji: 'tsu', hiragana: 'つ' },
		{ romanji: 'te', hiragana: 'て' },
		{ romanji: 'to', hiragana: 'と' },
		{ romanji: 'na', hiragana: 'な' },
		{ romanji: 'ni', hiragana: 'に' },
		{ romanji: 'nu', hiragana: 'ぬ' },
		{ romanji: 'ne', hiragana: 'ね' },
		{ romanji: 'no', hiragana: 'の' },
		{ romanji: 'ha', hiragana: 'は' },
		{ romanji: 'hi', hiragana: 'ひ' },
		{ romanji: 'fu', hiragana: 'ふ' },
		{ romanji: 'he', hiragana: 'へ' },
		{ romanji: 'ho', hiragana: 'ほ' },
		{ romanji: 'ma', hiragana: 'ま' },
		{ romanji: 'mi', hiragana: 'み' },
		{ romanji: 'mu', hiragana: 'む' },
		{ romanji: 'me', hiragana: 'め' },
		{ romanji: 'mo', hiragana: 'も' },
		{ romanji: 'ya', hiragana: 'や' },
		{ romanji: 'yu', hiragana: 'ゆ' },
		{ romanji: 'yo', hiragana: 'よ' },
		{ romanji: 'ra', hiragana: 'ら' },
		{ romanji: 'ri', hiragana: 'り' },
		{ romanji: 'ru', hiragana: 'る' },
		{ romanji: 're', hiragana: 'れ' },
		{ romanji: 'ro', hiragana: 'ろ' },
		{ romanji: 'wa', hiragana: 'わ' },
		{ romanji: 'wo', hiragana: 'を' },
		{ romanji: 'n', hiragana: 'ん' },
    { hiragana: 'が', romanji: 'ga'},	
    { hiragana: 'ぎ', romanji: 'gi'},	
    { hiragana: 'ぐ', romanji: 'gu'},	
    { hiragana: 'げ', romanji: 'ge'},	
    { hiragana: 'ご', romanji: 'go'},	
    { hiragana: 'ぎゃ', romanji: 'gya'},	
    { hiragana: 'ぎゅ', romanji: 'gyu'},	
    { hiragana: 'ぎょ', romanji: 'gyo'},					
    { hiragana: 'ざ', romanji: 'za'},	
    { hiragana: 'じ', romanji: 'ji'},	
    { hiragana: 'ず', romanji: 'zu'},	
    { hiragana: 'ぜ', romanji: 'ze'},	
    { hiragana: 'ぞ', romanji: 'zo'},	
    { hiragana: 'じゃ', romanji: 'ja'},	
    { hiragana: 'じゅ', romanji: 'ju'},	
    { hiragana: 'じょ', romanji: 'jo'},					
    { hiragana: 'だ', romanji: 'da'},	
    { hiragana: 'ぢ', romanji: 'dji'},	
    { hiragana: 'づ', romanji: 'dzu'},	
    { hiragana: 'で', romanji: 'de'},	
    { hiragana: 'ど', romanji: 'do'},	
    { hiragana: 'ぢゃ', romanji: 'dya'},	
    { hiragana: 'ぢゅ', romanji: 'dyu'},	
    { hiragana: 'ぢょ', romanji: 'dyo'},					
    { hiragana: 'ば', romanji: 'ba'},	
    { hiragana: 'び', romanji: 'bi'},	
    { hiragana: 'ぶ', romanji: 'bu'},	
    { hiragana: 'べ', romanji: 'be'},	
    { hiragana: 'ぼ', romanji: 'bo'},	
    { hiragana: 'びゃ', romanji: 'bya'},	
    { hiragana: 'びゅ', romanji: 'byu'},	
    { hiragana: 'びょ', romanji: 'byo'},	
    { hiragana: 'っば', romanji: 'bba'},	
    { hiragana: 'っび', romanji: 'bbi'},	
    { hiragana: 'っぶ', romanji: 'bbu'},	
    { hiragana: 'っべ', romanji: 'bbe'},	
    { hiragana: 'っぼ', romanji: 'bbo'},
    { hiragana: 'ぱ', romanji: 'pa'},	
    { hiragana: 'ぴ', romanji: 'pi'},	
    { hiragana: 'ぷ', romanji: 'pu'},	
    { hiragana: 'ぺ', romanji: 'pe'},	
    { hiragana: 'ぽ', romanji: 'po'},	
    { hiragana: 'ぴゃ', romanji: 'pya'},	
    { hiragana: 'ぴゅ', romanji: 'pyu'},	
    { hiragana: 'ぴょ', romanji: 'pyo'},
    { hiragana: 'っぱ', romanji: 'ppa'},	
    { hiragana: 'っぴ', romanji: 'ppi'},	
    { hiragana: 'っぷ', romanji: 'ppu'},	
    { hiragana: 'っぺ', romanji: 'ppe'},	
    { hiragana: 'っぽ', romanji: 'ppo'}
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

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak));
      localStorage.setItem('streak', streak + 1);
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
    setStreak(parseInt(localStorage.getItem('streak')) || 0);
    setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
    <header className="p-6 mb-8">
      <h1 className="text-2xl font-bold uppercase">Hiragana Quiz</h1>
      <div className="flex flex-row my-5 place-content-center">
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
      <Link to="/katakana-quiz"><div className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase ">Katakana Quiz</div></Link>
      <Link to="/kanji-number-quiz"><div  className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase">Number Quiz</div></Link>
    </div>
  </div>
  );
}

export default HiraganaQuiz;
