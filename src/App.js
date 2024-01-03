import './App.css';
import Loading from './components/loading/loading';
import Map from './components/map/map';
import Details from './components/details/details';
import Barchart from './components/barchart/barchart';
import { useStoreContext } from './app-store/app-store';
function App() {
  const { state } = useStoreContext();
  return state.dataLoading ? (
    <Loading />
  ) : (
    <div className="App">
      <Details />
      <Map></Map>
      <Barchart />
    </div>
  );
}

export default App;
