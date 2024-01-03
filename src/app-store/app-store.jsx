import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './app-reducer';
import { loadData, setLoading } from './app-action';
import neighborhoodData from '../data-json/kc-neighborhoods.json';
import tracksData from '../data-json/kc-tracts.json';

export const initialState = {
  selectedNeighborhood: {},
  dataLoading: true,
  errorLoadingData: false,
  neighborhoodData: {},
  tracksData: {},
};

const StoreContext = createContext(undefined);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addIDToFeatures = (data) => {
    const features = data.features.map((feature) => ({
      ...feature,
      id: feature.properties.id,
    }));
    return { ...data, features };
  };

  useEffect(() => {
    // mimic API call
    setLoading(true)(dispatch);
    setTimeout(() => {
      //load GeoJsons into the state
      loadData({
        selectedNeighborhood: neighborhoodData?.features[0]?.properties,
        dataLoading: false,
        neighborhoodData: addIDToFeatures(neighborhoodData),
        tracksData: addIDToFeatures(tracksData),
      })(dispatch);
    }, 3000);
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
};
