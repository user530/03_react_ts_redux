import React from 'react';
import { Locations, Location } from '../models';
import { useAppDispatch } from '../app/hooks';
import { setLocationsFilter } from '../features/filters/filtersSliceTS';

interface FilterLocationElementProps {
  locationsFilter: Location[];
  locationString: Location;
  index: number;
}

const FilterLocationElement = (props: FilterLocationElementProps) => {
  const { locationsFilter, locationString, index } = props;

  const dispatch = useAppDispatch();

  const locationRef = React.useRef<HTMLInputElement>(null);

  const locationClick = (): void => {
    const clickedLocation = locationRef.current?.value;

    if (
      typeof clickedLocation === 'undefined' ||
      !strIsLocation(clickedLocation)
    )
      return;

    const newFilter: Location[] = newLocationFilter(
      locationsFilter,
      clickedLocation
    );

    dispatch(setLocationsFilter({ locationsFilter: newFilter }));
  };

  return (
    <label htmlFor={`location-${index}`} key={index}>
      {locationString}
      <input
        ref={locationRef}
        type="checkbox"
        name={`locations`}
        id={`location-${index}`}
        value={locationString}
        checked={locationsFilter.includes(locationString)}
        onChange={locationClick}
      />
    </label>
  );
};

export function strIsLocation(string: string): string is Location {
  const match = Object.values(Locations).find(
    (location) => location === string
  );

  if (match) return true;
  return false;
}

function newLocationFilter(
  locationsFilter: Location[],
  location: Location
): Location[] {
  if (locationsFilter.includes(location))
    return locationsFilter.filter(
      (filterLocation) => filterLocation !== location
    );

  return [...locationsFilter, location];
}

export default FilterLocationElement;
