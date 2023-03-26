import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="min-h-screen bg-slate-800 text-white text-center">
      <h1 className="text-2xl font-bold uppercase">Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occurred...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h1 className="my-10">Go back to quiz!</h1>
      <div className="flex flex-row my-5 place-content-center">
      <Link to="/katakana-quiz"><div className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase ">Katakana Quiz</div></Link>
      <Link to="/"><div  className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase">Hiragana Quiz</div></Link>
      <Link to="/kanji-number-quiz"><div className="hover:text-white text-sky-300 font-bold p-8 border-solid border-2 border-sky-500 rounded-lg m-8 hover:bg-sky-700 uppercase ">Number Quiz</div></Link>
    </div>
    </div>
  );
}