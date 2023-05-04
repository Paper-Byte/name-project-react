import { regionCodeToCountry } from './functions';

const logAgifyData = async (name, country) => {
  const agifyResponse = await fetch(
    `https://api.agify.io?name=${name}&country_id=${country}`
  );
  const agifyJson = await agifyResponse.json();
  return agifyJson.age === null ? 'Not Enough Data' : agifyJson.age;
};

const logGenderizaData = async (name, country) => {
  const genderizeResponse = await fetch(
    `https://api.genderize.io?name=${name}&country_id=${country}`
  );
  const genderizeJson = await genderizeResponse.json();
  return genderizeJson.gender === null
    ? 'Not Enough Data'
    : genderizeJson.gender + ' ' + genderizeJson.probability + '%';
};

const logNationalizeData = async (name) => {
  const nationalizeResponse = await fetch(
    `https://api.nationalize.io?name=${name}`
  );
  const nationalizeJson = await nationalizeResponse.json();
  return regionCodeToCountry(nationalizeJson.country[0].country_id);
};

const logCountriesData = async (country) => {
  const countriesResponse = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const countriesJson = await countriesResponse.json();
  return countriesJson[0].cca2;
};

export const apiCalls = {
  logCountriesData,
  logNationalizeData,
  logAgifyData,
  logGenderizaData,
};
