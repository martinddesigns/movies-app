import './styles/main.scss';
import Hero from './Components/Hero/Hero';
import Filter from './Components/Filter/Filter';
import MovieList from './Adapters/MovieList';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const getInput = (search) => {
    setResult(search)
  }

  return (
    <>
      <Hero title='Top 100 Movies of all time'/>
      <Filter startSearch={getInput} />
      <MovieList movieSearch={result} />
    </>
  );
}

export default App;
