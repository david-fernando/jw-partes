import { useContext } from 'react';
import { SearchProvider } from './context/SearchContext'
import Main from './Main';

export default function App() {
  return (
    <SearchProvider>
      <Main />
    </SearchProvider>
  );
}
