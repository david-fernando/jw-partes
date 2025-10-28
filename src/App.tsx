import { SearchProvider } from './context/SearchContext'
import { DesignateProvider } from './context/DesignateContext'
import Main from './Main';
import Designate from './components/Designate';

export default function App() {
  return (
    <SearchProvider>
      <DesignateProvider>
        <Main />
        <Designate/>
      </DesignateProvider>
    </SearchProvider>
  );
}
