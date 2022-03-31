import './styles/main.scss';
import Hero from './Components/Hero/Hero';
import Filter from './Components/Filter/Filter';
import MovieList from './Adapters/MovieList';

import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [loader, setLoader] = useState(false);

  const getInput = (search) => {
    setResult(search)
  }

  const changeLoader = (isLoading) => {
    setLoader(isLoading);
  }

  return (
    <>
      <Hero title='Top 100 Movies of all time'/>
      <Filter startSearch={getInput} changeLoader={changeLoader} />
      <MovieList movieSearch={result} loader={loader} />
    </>
  );
}

export default App;
