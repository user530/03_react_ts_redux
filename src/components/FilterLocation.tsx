import React from 'react';
import { Locations, Location } from '../models';

import FilterLocationElement from './FilterLocationElement';

interface FilterLocationProps {
  locations: Location[];
}

const FilterLocationComponent = (props: FilterLocationProps) => {
  const { locations } = props;

  return (
    <div className="filter-location">
      {Object.values(Locations).map((locationStr: Location, index: number) => (
        <FilterLocationElement
          key={index}
          index={index}
          locationsFilter={locations}
          locationString={locationStr}
        />
      ))}
    </div>
  );
};

export default FilterLocationComponent;
