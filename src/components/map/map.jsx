/**
 * The `Map` component is a React component that uses the Mapbox GL library to render a map and handle
 * user interactions such as clicking on features and updating the selected properties.
 */
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useStoreContext } from '../../app-store/app-store';
import { updateSelectedNeighborhood } from '../../app-store/app-action';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapRef = useRef();
  const selectedNeighborhoodRef = useRef(); // used to track clicked neighborhood without rerendering

  const {
    state: { neighborhoodData, tracksData, selectedNeighborhood },
    dispatch,
  } = useStoreContext();

  useEffect(() => {
    selectedNeighborhoodRef.current = selectedNeighborhood;
    if (neighborhoodData?.features && tracksData?.features) {
      // Calculate the center of the bounds
      const allFeatures = [
        ...neighborhoodData?.features,
        ...tracksData?.features,
      ];

      const bounds = allFeatures.reduce(
        ([minLng, minLat, maxLng, maxLat], feature) => {
          const coords = feature.geometry.coordinates[0];
          coords.forEach(([lng, lat]) => {
            minLng = Math.min(minLng, lng);
            minLat = Math.min(minLat, lat);
            maxLng = Math.max(maxLng, lng);
            maxLat = Math.max(maxLat, lat);
          });
          return [minLng, minLat, maxLng, maxLat];
        },
        [Infinity, Infinity, -Infinity, -Infinity],
      );

      /* calculating the center coordinates of the map based on the bounds of all the features. */
      const center = [(bounds[0] + bounds[2]) / 2, (bounds[1] + bounds[3]) / 2];

      // initialize mapbox
      mapRef.current = new mapboxgl.Map({
        accessToken: token,
        container: 'map',
        center: center,
        zoom: 11,
      });

      /* setClickStatus function is used to set active and inactive state of each neighborhood to highlight when clicked on */
      function setClickStatus(properties, status) {
        mapRef.current.setFeatureState(
          { source: 'neighborhoods', id: properties.id },
          { clicked: status },
        );
      }

      mapRef.current.on('load', () => {
        mapRef.current.addSource('neighborhoods', {
          type: 'geojson',
          data: neighborhoodData,
        });
        mapRef.current.addSource('tracks', {
          type: 'geojson',
          data: tracksData,
        });
        mapRef.current.addLayer({
          id: 'neighborhoods',
          type: 'fill',
          source: 'neighborhoods',
          paint: {
            'fill-color': [
              'case',
              ['boolean', ['feature-state', 'clicked'], false],
              'red', // Color when clicked
              'blue', // Default color
            ],
            'fill-opacity': 0.5,
          },
        });
        mapRef.current.addLayer({
          id: 'tracks',
          type: 'line',
          source: 'tracks',
          paint: {
            'line-color': 'black',
            'line-opacity': 1,
          },
        });

        // higlight the default neighborhood
        setClickStatus(selectedNeighborhood, true);
      });

      mapRef.current.on('click', (event) => {
        const point = mapRef.current.queryRenderedFeatures(event.point, {
          layers: ['tracks', 'neighborhoods'],
        });
        const properties = point[0]?.properties ? point[0]?.properties : null;

        if (properties) {
          if (selectedNeighborhoodRef.current) {
            setClickStatus(selectedNeighborhoodRef.current, false);
          }
          setClickStatus(properties, true);
          selectedNeighborhoodRef.current = properties;
          updateSelectedNeighborhood(properties)(dispatch);
        }
      });
      return () => {
        mapRef.current.remove();
      };
    }
  }, [neighborhoodData, tracksData, token]);

  return <div id="map" style={{ width: '100%', height: '60vh' }} />;
};

export default Map;
