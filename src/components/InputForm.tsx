import React, { FormEvent } from 'react';
import './styles/InputForm.css';
import { Locations } from '../models';
import { useAppDispatch } from '../app/hooks';
import { addQuest } from '../features/quests/questsSliceTS';
import { strIsLocation } from '../components/FilterLocationElement';

interface InputFormProps {}

const InputFormComponent = (props: InputFormProps) => {
  const dispatch = useAppDispatch();

  const nameRef = React.useRef<HTMLInputElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const xpRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const qName = nameRef.current?.value;
    const qLocation = locationRef.current?.value;
    const qXp = xpRef.current?.value;

    if (!qName || !qLocation || !qXp)
      return alert('Please, fill all required fields!');

    if (qName.trim() === '') return alert('Please, enter correct quest name!');

    if (!strIsLocation(qLocation))
      return alert('Please, select correct quest location!');

    if (parseInt(qXp) < 1)
      return alert('Please, select correct quest xp value!');

    dispatch(addQuest({ name: qName, location: qLocation, xp: parseInt(qXp) }));
  };

  return (
    <div className="quest-input-component">
      <h2>Add new quest:</h2>
      <form className="quest-input-form" onSubmit={handleSubmit}>
        <label htmlFor="questName">
          Quest name:
          <input type="text" ref={nameRef} name="questName" id="questName" />
        </label>

        <label htmlFor="quest-location">
          Quest location:
          <select name="quest-location" id="quest-location" ref={locationRef}>
            {Object.values(Locations).map((locationStr, index) => (
              <option
                key={index}
                className={`quest-location-${index}`}
                value={locationStr}
              >
                {locationStr}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="questXp">
          Quest XP:
          <input
            type="number"
            ref={xpRef}
            name="questXp"
            id="questXp"
            min={1}
            max={1000}
          />
        </label>

        <input type="submit" value="Add quest" />
      </form>
    </div>
  );
};

export default InputFormComponent;
