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

export const outputFunction = (state) => {
  const returnArray = [];
  const countryStr = state.country;
  returnArray.push(nameFormatting(state.name));
  returnArray.push(countryStr);

  returnArray.push(apiCalls.logAgifyData(state.name, countryStr));
  returnArray.push(apiCalls.logNationalizeData(state.name));
  returnArray.push(apiCalls.logGenderizaData(state.name, countryStr));
  console.log(returnArray);
  return returnArray;
};
