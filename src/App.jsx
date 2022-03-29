import './styles/main.scss';
import Hero from './Components/Hero/Hero';
import Filter from './Components/Filter/Filter';
import MovieList from './Adapters/MovieList';

function App() {

  return (
    <>
      <Hero title='Hello'/>
      <Filter />
      <MovieList />
    </>
  );
}

export default App;
