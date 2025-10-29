import { SearchProvider } from './context/SearchContext'
import { DesignateProvider } from './context/DesignateContext'
import Home from './screens/Home';
import Designate from './screens/Designate';

export default function App() {
  return (
    <SearchProvider>
      <DesignateProvider>
        <Home />
        <Designate/>
      </DesignateProvider>
    </SearchProvider>
  );
}
