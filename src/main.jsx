import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HiraganaQuiz from './pages/HiraganaQuiz';
import KatakanaQuiz from './pages/KatakanaQuiz';
import KanjiNumberQuiz from './pages/KanjiNumberQuiz';

import './index.css';
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HiraganaQuiz />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/katakana-quiz",
    element: <KatakanaQuiz />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/kanji-number-quiz",
    element: <KanjiNumberQuiz />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
