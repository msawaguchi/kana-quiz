import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function KanjiNumberQuiz() {
  const numberKanji = [
    { romanji: 'zero', numberKanji: '零', eigo:'0'},
		{ romanji: 'ichi', numberKanji: '一', eigo:'1'},
		{ romanji: 'ni', numberKanji: '二', eigo:'2'},
		{ romanji: 'san', numberKanji: '三', eigo:'3'},
		{ romanji: 'yon', numberKanji: '四', eigo:'4'},
		{ romanji: 'go', numberKanji: '五', eigo:'5'},
		{ romanji: 'roku', numberKanji: '六', eigo:'6'},
		{ romanji: 'nana', numberKanji: '七', eigo:'7'},
		{ romanji: 'hachi', numberKanji: '八', eigo:'8'},
		{ romanji: 'kyuu', numberKanji: '九', eigo:'9'},
    { romanji: 'juu', numberKanji: '十', eigo:'10'},
    { romanji: 'hyaku', numberKanji: '百', eigo:'100'},
    { romanji: 'sen', numberKanji: '千', eigo:'1000'},
    { romanji: 'ichiman', numberKanji: '一万', eigo:'10000'},
    { romanji: 'ichioku', numberKanji: '一億', eigo:'100 million'},
    { romanji: 'juoku', numberKanji: '十億', eigo:'1 billion'},
    { romanji: 'hyakuoku', numberKanji: '百億', eigo:'10 billion'},
    { romanji: 'issenoku', numberKanji: '一千億', eigo:'100 billion' },
    { romanji: 'icchou', numberKanji: '一兆',  eigo: '1 trillion'},
    { romanji: 'jucchou', numberKanji: '十兆', eigo:'10 trillion' },
  ];

  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setRandomnumberKanji = () => {
    const randomIndex = Math.floor(Math.random() * numberKanji.length);
    setCurrent(randomIndex);
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();

    if (input.toLowerCase() === numberKanji[current].romanji
        || input.toLowerCase() === numberKanji[current].eigo) {
      setStreak(streak + 1);
      setMaxStreak(Math.max(streak + 1, maxStreak));
      setError(false);

      localStorage.setItem('maxStreakNumbers', Math.max(streak, maxStreak));
      localStorage.setItem('streakNumber', streak + 1);
    } else {
      setStreak(0);
      setError(`Wrong! The correct answer for ${numberKanji[current].numberKanji} is ${numberKanji[current].romanji} or ${numberKanji[current].eigo}.`);

      localStorage.setItem('streak', 0);
    }

    setInput('');
    setRandomnumberKanji();
  }

  useEffect(() => {
    setRandomnumberKanji();
    setStreak(parseInt(localStorage.getItem('streakNumber')) || 0);
    setMaxStreak(parseInt(localStorage.getItem('maxStreakNumbers')) || 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
    <header className="p-6 mb-8">
      <h1 className="text-2xl font-bold uppercase">Kanji Number Quiz</h1>
      <div className="flex flex-row my-5">
        <p className="basis-1/2"><label className="text-slate-300">score:</label> {streak}</p>
        <p className="basis-1/2"><label className="text-slate-300">max score:</label>  {maxStreak}</p>
      </div>
    </header>

    <div className="text-9xl font-bold mb-8">
      <p>{numberKanji[current].numberKanji}</p>
    </div>

    <div className="mb-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          className="block w-56 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2" />
      </form>
    </div>
    {error && 
      <div>
        <p>{ error }</p>
      </div>
    }

    <div className="flex flex-row my-5 place-content-center">
      <Link to="/katakana-quiz"><div className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase ">Katakana Quiz</div></Link>
      <Link to="/"><div  className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase">Hiragana Quiz</div></Link>
    </div>
  </div>
  );
}

export default KanjiNumberQuiz;
