import { apiCalls } from './apiCalls.js';

export const regionCodeToCountry = (countryStr) => {
  const regionNames = new Intl.DisplayNames(['en'], {
    type: 'region',
  });
  const country = regionNames.of(countryStr);
  return country;
};

export const nameFormatting = (nameStr) => {
  return nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
};

export const outputFunction = async (setFormState, state) => {
  const stateName = nameFormatting(state.name);
  const stateCountry = state.country;
  const originState = await apiCalls.logNationalizeData(stateName);
  const ageState = await apiCalls.logAgifyData(
    stateName,
    stateCountry
  );
  const genderState = await apiCalls.logGenderizaData(
    stateName,
    stateCountry
  );
  setFormState({
    ...state,
    name: stateName,
    country: stateCountry,
    origin: originState,
    age: ageState,
    gender: genderState,
  });
};
