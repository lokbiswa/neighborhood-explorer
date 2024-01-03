import React from 'react';
import { useStoreContext } from '../../app-store/app-store';
import './style.css';

const Details = () => {
  const { state, dispatch } = useStoreContext();
  const { selectedNeighborhood } = state;

  const areaRawText = selectedNeighborhood?.shid?.split('/');
  const areaData = areaRawText.reduce((data, property) => {
    const [key, value] = property.split(':');
    if (data) {
      data[key] = value.replace(/_/g, ' ');
    } else {
      data = { [key]: value };
    }
    return data;
  }, {});
  console.log(areaData);
  return (
    <div className="detail-container">
      <div className="state-name detail">
        <label>State: </label>
        <p>{areaData.state}</p>
      </div>
      <div className="city-name detail">
        <label>City: </label>
        <p>{areaData.place}</p>
      </div>
      <div className="neighborhood-name detail">
        <label>Neighborhood: </label>
        <p>{areaData.neighborhood}</p>
      </div>
    </div>
  );
};

export default Details;
