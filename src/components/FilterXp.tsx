import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { setXpFilter } from '../features/filters/filtersSliceTS';

interface FilterXpProps {
  xpRange: [number, number];
}

const FilterXpComponent = (props: FilterXpProps) => {
  const { xpRange } = props;

  const minXpRef = React.useRef<HTMLInputElement>(null);
  const maxXpRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const updateMinXpFilter = () => {
    const newVal = minXpRef.current?.value;
    if (!newVal) return;

    dispatch(setXpFilter({ xpRange: [parseInt(newVal), xpRange[1]] }));
  };

  const updateMaxXpFilter = () => {
    const newVal = maxXpRef.current?.value;
    if (!newVal) return;
    dispatch(setXpFilter({ xpRange: [xpRange[0], parseInt(newVal)] }));
  };

  return (
    <div className="filter-xp">
      <label htmlFor="minXp">
        Xp range: min
        <input
          ref={minXpRef}
          type="number"
          name="minXp"
          id="minXp"
          defaultValue={xpRange[0]}
          onChange={updateMinXpFilter}
        />
      </label>

      <label htmlFor="maxXp">
        Xp range: max
        <input
          ref={maxXpRef}
          type="number"
          name="maxXp"
          id="maxXp"
          defaultValue={xpRange[1]}
          onChange={updateMaxXpFilter}
        />
      </label>
    </div>
  );
};

export default FilterXpComponent;
