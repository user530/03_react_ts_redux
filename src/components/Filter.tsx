import React from 'react';
import './styles/Filter.css';
import FilterStatusComponent from './FilterStatus';
import FilterLocationComponent from './FilterLocation';
import FilterXpComponent from './FilterXp';
import { Filter } from '../models';

interface FilterComponentProps {
  filters: Filter;
}

const FilterComponent = (props: FilterComponentProps) => {
  const {
    filters: { completed, locations, xpRange },
  } = props;

  return (
    <div className="filter-component">
      <h2>Filters:</h2>
      <form className="filter-form">
        <FilterStatusComponent statusFilter={completed} />
        <FilterLocationComponent locations={locations} />
        <FilterXpComponent xpRange={xpRange} />
      </form>
    </div>
  );
};

export default FilterComponent;
