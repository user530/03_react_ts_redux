import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { toggleStatusFilter } from '../features/filters/filtersSliceTS';

interface FilterStatusProps {
  statusFilter: boolean;
}

const FilterStatusComponent = (props: FilterStatusProps) => {
  const { statusFilter } = props;
  const dispatch = useAppDispatch();

  const statusFilterClick = () => {
    dispatch(toggleStatusFilter());
  };

  return (
    <div className="filter-status">
      <label htmlFor="filter-status-active">
        Active quests
        <input
          type="radio"
          name="filter-status"
          id="filter-status-active"
          checked={!statusFilter}
          onChange={statusFilterClick}
        />
      </label>

      <label htmlFor="filter-status-completed">
        Completed quests
        <input
          type="radio"
          name="filter-status"
          id="filter-status-completed"
          checked={statusFilter}
          onChange={statusFilterClick}
        />
      </label>
    </div>
  );
};

export default FilterStatusComponent;
